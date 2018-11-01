import { connect } from 'react-redux';
import Table from '../components/table.js';

import { fetchTorrents, selectTorrent } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.torrents,
        selectedId: state.selectedId
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        refresh: () => {
            dispatch(fetchTorrents());
        },
        reportSelected: (info_hash, currentSelected) => {
            if (info_hash == currentSelected) {
                dispatch(selectTorrent(null));
            } else {
                dispatch(selectTorrent(info_hash));
            }
        }
    };
};

const TableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

export default TableContainer;
