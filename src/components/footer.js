import React from 'react';
import PropTypes from 'prop-types';
import {
    removeTorrent,
    startTorrent,
    pauseTorrent,
    openFileDialogAction
} from '../actions';
import { Button } from 'react-bootstrap';

import '../styles/footer.css';

let Footer = ({ visible, onclick, selectedId }) => (
    <div className="footer">
        {[
            { name: 'remove', action: removeTorrent },
            { name: 'start', action: startTorrent },
            { name: 'pause', action: pauseTorrent },
            { name: 'add', label: 'add torrent', action: openFileDialogAction }
        ].map((params) => (
            <Button
                bsSize="large"
                className={'footer-button ' + params.name}
                key={params.name}
                disabled={!visible[params.name]}
                onClick={() =>
                    onclick(() => {
                        if (selectedId || params.name == 'add')
                            return params.action(selectedId);
                    })
                }
            >
                {params.label ? params.label : params.name}
            </Button>
        ))}
    </div>
);

Footer.propTypes = {
    selectedId: PropTypes.string,
    visible: PropTypes.shape({
        start: PropTypes.bool,
        remove: PropTypes.bool,
        pause: PropTypes.bool,
        add: PropTypes.bool
    }).isRequired,
    onclick: PropTypes.func.isRequired
};

export default Footer;
