import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

const columns = ['Name', 'Status', 'Up', 'Down', 'Progress', 'Npeers'].map(
    (header) => {
        return {
            Header: header,
            accessor: header.toLowerCase()
        };
    }
);

class Table extends Component {
    componentDidMount() {
        window.setInterval(() => this.props.refresh(), 1000);
    }

    render() {
        return (
            <ReactTable
                data={this.props.data}
                columns={columns}
                defaultPageSize={5}
                showPaginationBottom={false}
                getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: (e, handleOriginal) => {
                            if (rowInfo) {
                                this.props.reportSelected(
                                    rowInfo.original.info_hash,
                                    this.props.selectedId
                                );
                            }
                            if (handleOriginal) {
                                handleOriginal();
                            }
                        },
                        style: {
                            background:
                                rowInfo &&
                                rowInfo.original.info_hash ==
                                    this.props.selectedId
                                    ? 'rgb(173, 214, 149)'
                                    : 'white'
                        }
                    };
                }}
            />
        );
    }
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    reportSelected: PropTypes.func.isRequired,
    selectedId: PropTypes.string,
    refresh: PropTypes.func.isRequired
};

export default Table;
