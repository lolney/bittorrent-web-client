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
        visible: getVisibility(
            state.torrents.find((trnt) => trnt.info_hash == state.selectedId)
        ),
        selectedId: state.selectedId
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onclick: (action) => {
            if (action) dispatch(action());
        }
    };
};

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default FooterContainer;
