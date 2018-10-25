import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup } from 'react-bootstrap';
import { FilePicker } from 'react-file-picker/lib';

import '../styles/fileDialog.css';

class FileDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            download_path: null,
            metainfo_path: null
        };
    }

    render() {
        return (
            <Modal show={this.props.visible} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a torrent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            {[
                                {
                                    key: 'download_path',
                                    label: 'Download To:'
                                },
                                {
                                    key: 'metainfo_path',
                                    label: 'Torrent File:'
                                }
                            ].map((params) =>
                                filePicker({
                                    ...params,
                                    value: this.state[params.key],
                                    setState: this.setState.bind(this)
                                })
                            )}
                        </FormGroup>
                        <Button
                            onClick={() =>
                                this.props.onSubmit(
                                    this.state.download_path,
                                    this.state.metainfo_path
                                )
                            }
                            disabled={
                                !Object.values(this.state).every(
                                    (k) => k != null
                                )
                            }
                        >
                            Submit
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

let filePicker = ({ key, label, value, setState }) => (
    <div className={'filepicker'} key={key}>
        <FilePicker
            onChange={(file) => {
                let dict = {};
                dict[key] = file.name;
                setState(dict);
            }}
        >
            <Button className={'filepickerbutton'}>{label}</Button>
        </FilePicker>
        <span className={'filepickerlabel'}>{value}</span>
    </div>
);

FileDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired
};

export default FileDialog;
