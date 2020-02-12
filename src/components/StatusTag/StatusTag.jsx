import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './StatusTag.module.scss';

const StatusTag = props => {
    const { value, className, color, ...other } = props;

    const statusClass = classnames(styles.wrapper, styles[color], {
        [className]: className
    });

    return (
        <div {...other} className={statusClass}>
            {value}
        </div>
    );
};

StatusTag.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string, // purple, green, green-dark, yellow, blue, grey
    value: PropTypes.string // Action Required, Active, Scheduled, Draft, Paused, Ended
};

export default StatusTag;
