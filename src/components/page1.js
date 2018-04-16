import React from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

const data = [{
  name: 'Example',
  status: 'Running',
  up: 120,
  down: 60,
  npeers: 30,
}];

const columns = ['Name', 'Status', 'Up', 'Down', 'Npeers'].map((header) => {
  return {
    Header: header,
    accessor: header.toLowerCase()
  }
});

export default React.createClass({
  render() {
    return (
      < ReactTable
        data={data}
        columns={columns}
      />
    )
  }
});
