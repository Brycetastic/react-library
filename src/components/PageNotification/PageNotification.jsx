import React from 'react';
import { Icon } from '../';
import styles from './PageNotification.module.scss';
import classnames from 'classnames';

const PageNotification = ({ children, className, type, onClose }) => {
    const notificationStyles = classnames(styles.notificationWrapper, styles[type], {
        [className]: className
    });

    let iconName = '';
    if (type === 'success') {
        iconName = 'check';
    } else if (type === 'info') {
        iconName = 'infoSolid';
    } else if (type === 'warning') {
        iconName = 'question';
    } else if (type === 'error') {
        iconName = 'exclamation';
    }

    return (
        <div className={notificationStyles} data-modal={true}>
            <div className={styles.title}>
                <Icon name={iconName} className="icon" />
                <h5>{children}</h5>
                <button className={styles.close} data-close={true} onClick={onClose}>
                    <Icon name="close" className="icon" />
                </button>
            </div>
        </div>
    );
};

export default PageNotification;
