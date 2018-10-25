import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup } from 'react-bootstrap';
import { FilePicker } from 'react-file-picker/lib';

class FileDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            download_path: '',
            metainfo_path: ''
        };
    }

    render() {
        return (
            <Modal show={this.props.visible}>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
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
    <div key={key}>
        <FilePicker
            onChange={(file) => {
                let dict = {};
                dict[key] = file.name;
                setState(dict);
            }}
        >
            <Button>{label}</Button>
        </FilePicker>
        <span>{value}</span>
    </div>
);

FileDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default FileDialog;
