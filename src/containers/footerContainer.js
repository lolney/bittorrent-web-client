import { connect } from 'react-redux';
import Footer from '../components/footer.js';

function getVisibility(activeTorrent) {
    return {
        start: activeTorrent && activeTorrent.status == 'paused',
        pause: activeTorrent && activeTorrent.status != 'paused',
        remove: activeTorrent
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        visible: getVisibility(state.torrents[state.selectedTorrentId]),
        selected: state.selectedTorrentId
    };
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
