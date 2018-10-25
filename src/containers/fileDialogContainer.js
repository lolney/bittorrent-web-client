import { connect } from 'react-redux';
import FileDialog from '../components/fileDialog';

import { closeFileDialog, closeFileDialogAction } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        visible: state.fileDialogIsOpen
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (dl, mi) => {
            dispatch(closeFileDialog(dl, mi));
        },
        onHide: () => {
            dispatch(closeFileDialogAction());
        }
    };
};

const FileDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileDialog);

export default FileDialogContainer;
