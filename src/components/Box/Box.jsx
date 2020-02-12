import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Box.module.scss';

const Box = ({ error, className, children, ...other }) => {
    const boxClass = classnames(styles.wrapper, {
        [styles.error]: error,
        [className]: className
    });

    return (
        <div {...other} className={boxClass}>
            {children}
        </div>
    );
};

Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    error: PropTypes.bool
};

export default Box;
