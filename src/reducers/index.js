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
            torrents: torrents ? torrents : []
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
    case 'SELECT_TORRENT':
        return {
            ...state,
            selectedId: action.info_hash
        };
    default:
        return state;
    }
};

export default reducers;
