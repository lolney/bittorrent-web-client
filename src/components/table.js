import React, { Component } from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import { fetchTorrents } from '../actions';

const columns = ['Name', 'Status', 'Up', 'Down', 'Npeers'].map((header) => {
    return {
        Header: header,
        accessor: header.toLowerCase()
    };
});

class Table extends Component {
    componentDidMount() {
        this.props.dispatch((dispatch, getState) => {
            return dispatch(fetchTorrents());
        });
    }

    render() {
        return <ReactTable data={this.props.data} columns={columns} />;
    }
}

export default Table;
