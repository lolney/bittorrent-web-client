import React from 'react';
import PropTypes from 'prop-types';
import { removeTorrent, startTorrent, pauseTorrent } from '../actions';
import { Button } from 'react-bootstrap';

let Footer = ({ visible, onclick }) => (
    <div>
        {[
            { name: 'remove', action: removeTorrent },
            { name: 'start', action: startTorrent },
            { name: 'pause', action: pauseTorrent }
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
    }),
    onclick: PropTypes.func
};

export default Footer;
