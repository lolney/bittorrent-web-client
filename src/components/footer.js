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

let Footer = ({ visible, onclick }) => (
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
                onClick={() => onclick(params.action)}
            >
                {params.label ? params.label : params.name}
            </Button>
        ))}
    </div>
);

Footer.propTypes = {
    visible: PropTypes.shape({
        start: PropTypes.bool.isRequired,
        remove: PropTypes.bool.isRequired,
        pause: PropTypes.bool.isRequired,
        add: PropTypes.bool.isRequired
    }).isRequired,
    onclick: PropTypes.func.isRequired
};

export default Footer;
