const reducers = function (state = {}, action) {
    switch (action.type) {
        case "ADD_TORRENT":
            return {
                ...state,
                torrents: state.torrents.concat(action.torrent)
            }
        case "RECEIVE_TORRENTS":
            console.log(action.torrents)
            return {
                ...state,
                torrents: action.torrents
            }
        default:
            return state
    }
}

export default reducers