import React from 'react';
import { Icon } from '../..';
import styles from './Notification.module.scss';

const Notification = ({ children, type, onClose }) => {
    return (
        <div className={styles.boxWrapper} data-modal={true}>
            <button className={styles.close} data-close={true} onClick={onClose}>
                <Icon name="close" className="icon" />
            </button>

            <div className={styles.contentWrapper}>
                <Icon width="100px" name={type} className="icon" />
                <div className={styles.children}>{children}</div>
            </div>
        </div>
    );
};

export default Notification;
