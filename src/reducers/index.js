const reducers = function(state = {}, action) {
    switch (action.type) {
    case 'ADD_TORRENT':
        let torrents = { ...state.torrents };
        torrents[action.torrent.info_hash] = action.torrent;
        return {
            ...state,
            torrents: torrents
        };
    case 'RECEIVE_TORRENTS':
        console.log(action.torrents);
        return {
            ...state,
            torrents: action.torrents
        };
    default:
        return state;
    }
};

export default reducers;
