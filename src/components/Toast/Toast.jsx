import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../';
import styles from './Toast.module.scss';
import classnames from 'classnames';

export default function Toast({ className, type, children, title, onClose, onHover, onBlur }) {
    const toastClassName = classnames(styles.toast, {
        [styles.default]: !type,
        [className]: className
    });

    return (
        <div className={toastClassName} data-toast={true} onMouseEnter={onHover} onMouseLeave={onBlur}>
            {type ? <Icon width="44px" name={type} className={styles.icon} /> : null}
            <div className={styles.children}>{children || title}</div>
            <button className={styles.close} data-close={true} onClick={onClose}>
                <Icon width="12px" name="close" className="icon" />
            </button>
        </div>
    );
}

Toast.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    onBlur: PropTypes.func,
    onHover: PropTypes.func,
    onClose: PropTypes.func,
    type: PropTypes.string // success, info, warning, error, undefined
};

Toast.defaultProps = {
    isOpen: true
};
