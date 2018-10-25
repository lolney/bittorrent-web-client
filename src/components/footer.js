import React from 'react';
import PropTypes from 'prop-types';
import {
    removeTorrent,
    startTorrent,
    pauseTorrent,
    openFileDialogAction
} from '../actions';
import { Button } from 'react-bootstrap';

let Footer = ({ visible, onclick }) => (
    <div>
        {[
            { name: 'remove', action: removeTorrent },
            { name: 'start', action: startTorrent },
            { name: 'pause', action: pauseTorrent },
            { name: 'add', action: openFileDialogAction }
        ].map((params) => (
            <Button
                key={params.name}
                disabled={!visible[params.name]}
                onClick={() => onclick(params.action)}
            >
                {params.name}
            </Button>
        ))}
    </div>
);

Footer.propTypes = {
    visible: PropTypes.shape({
        remove: PropTypes.bool,
        start: PropTypes.bool,
        pause: PropTypes.bool
    }).isRequired,
    onclick: PropTypes.func.isRequired
};

export default Footer;
