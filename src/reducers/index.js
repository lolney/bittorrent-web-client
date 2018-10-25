const reducers = function(state = {}, action) {
    switch (action.type) {
    case 'ADD_TORRENT':
        var torrents = { ...state.torrents };
        torrents[action.torrent.info_hash] = action.torrent;
        return {
            ...state,
            torrents: torrents
        };
    case 'RECEIVE_TORRENTS':
        torrents = action.torrents;
        return {
            ...state,
            refreshing: false,
            torrents: torrents ? torrents : [],
            selected: torrents && torrents.length > 0 ? torrents[0] : null
        };
    case 'FETCH_TORRENTS':
        return {
            ...state,
            refreshing: true
        };
    case 'OPEN_FILE_DIALOG':
        return {
            ...state,
            fileDialogIsOpen: true
        };
    case 'CLOSE_FILE_DIALOG':
        return {
            ...state,
            fileDialogIsOpen: false
        };
    default:
        return state;
    }
};

export default reducers;
