import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

const columns = ['Name', 'Status', 'Up', 'Down', 'Npeers'].map((header) => {
    return {
        Header: header,
        accessor: header.toLowerCase()
    };
});

class Table extends Component {
    ComponentDidMount() {
        window.setInterval(() => this.props.refresh(), 1000);
    }

    render() {
        return <ReactTable data={this.props.data} columns={columns} />;
    }
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    refresh: PropTypes.func.isRequired
};

export default Table;
