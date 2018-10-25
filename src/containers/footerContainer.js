import { connect } from 'react-redux';
import Footer from '../components/footer.js';

function getVisibility(activeTorrent) {
    return {
        start: activeTorrent && activeTorrent.status == 'Paused',
        pause: activeTorrent && activeTorrent.status != 'Paused',
        remove: activeTorrent != undefined,
        add: true
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        visible: getVisibility(state.selected),
        selectedId: state.selected ? state.selected.info_hash : null
    }; /*{
        visible: getVisibility(state.torrents[state.selectedTorrentId]),
        selected: state.selectedTorrentId
    };*/
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onclick: (action) => {
            dispatch(action());
        }
    };
};

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default FooterContainer;
