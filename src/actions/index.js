import fetch from 'cross-fetch';

const BASE_URL = 'http://localhost:8000/';

export const addTorrent = (torrent) => ({
    type: 'ADD_TORRENT',
    torrent
});

export const requestTorrents = () => ({
    type: 'FETCH_TORRENTS'
});

export const receiveTorrents = (torrents) => ({
    type: 'RECEIVE_TORRENTS',
    torrents
});

export const openFileDialogAction = () => ({
    type: 'OPEN_FILE_DIALOG'
});

export const closeFileDialogAction = () => ({
    type: 'CLOSE_FILE_DIALOG'
});

export const closeFileDialog = (download_path, metainfo_path) =>
    function(dispatch) {
        dispatch(closeFileDialogAction());
        dispatch(requestAddTorrent(download_path, metainfo_path));
    };

let requestUpdate = (action, config) =>
    function(dispatch) {
        dispatch(requestTorrents());

        return match_action(action, config)
            .then((response) => response.json())
            .then((torrent) => dispatch(addTorrent(torrent)))
            .catch((error) => console.log('An error occurred.', error));
    };

let match_action = (action, config) => {
    let url = (() => {
        let params = config.params;
        switch (action) {
        case 'resume':
            return `torrents/${params.id}/${action}`;
        case 'pause':
            return `torrents/${params.id}/${action}`;
        case 'remove':
            return `torrents/${params.id}`;
        case 'add':
            return (
                'torrents?' +
                    Object.entries(params)
                        .map((kv) => kv.map(encodeURIComponent).join('='))
                        .join('&')
            );
        default:
            break;
        }
    })();
    return fetch(BASE_URL + url, { method: config.method });
};

export function startTorrent(id) {
    return requestUpdate('resume', { params: { id: id }, method: 'POST' });
}

export function removeTorrent(id) {
    return requestUpdate('remove', { params: { id: id }, method: 'DELETE' });
}

export function pauseTorrent(id) {
    return requestUpdate('pause', { params: { id: id }, method: 'POST' });
}

export function requestAddTorrent(download_path, metainfo_path) {
    return requestUpdate('add', {
        params: {
            download_path: download_path,
            metainfo_path: metainfo_path
        },
        method: 'PUT'
    });
}

export function fetchTorrents() {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function(dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(requestTorrents());

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch(BASE_URL + '/torrents')
            .then(
                (response) => response.json(),
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing a loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                (error) => console.log('An error occurred.', error)
            )
            .then((json) =>
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.
                dispatch(receiveTorrents(json.torrents))
            );
    };
}
