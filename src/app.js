import React, { Component } from 'react';
import TableContainer from './containers/tableContainer';
import FooterContainer from './containers/footerContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <TableContainer />
                <FooterContainer />
            </div>
        );
    }
}
