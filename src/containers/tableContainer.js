import { connect } from 'react-redux';
import Table from '../components/table.js';

import { fetchTorrents } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.torrents
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        refresh: () => {
            dispatch(fetchTorrents());
        }
    };
};

const TableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

export default TableContainer;
