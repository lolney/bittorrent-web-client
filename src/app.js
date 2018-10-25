import React, { Component } from 'react';
import TableContainer from './containers/tableContainer';
import FooterContainer from './containers/footerContainer';
import FileDialogContainer from './containers/fileDialogContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <TableContainer />
                <FileDialogContainer />
                <FooterContainer />
            </div>
        );
    }
}
