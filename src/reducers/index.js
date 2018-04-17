const reducers = function (state = {}, action) {
    switch (action.type) {
        case "ADD_TORRENT":
            return {
                ...state,
                torrents: state.torrents.concat(action.torrent)
            }
        default:
            return state
    }
}

export default reducers