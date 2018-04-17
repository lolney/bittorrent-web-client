import React from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

const columns = ['Name', 'Status', 'Up', 'Down', 'Npeers'].map((header) => {
  return {
    Header: header,
    accessor: header.toLowerCase()
  }
});

const Table = React.createClass({
  render() {
    return (
      < ReactTable
        data={this.props.data}
        columns={columns}
      />
    )
  }
});

export default Table;