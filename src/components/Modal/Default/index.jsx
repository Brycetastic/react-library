import React from 'react';
import { Icon } from '../../';
import styles from './Default.module.scss';

const Default = ({ title, children }) => {
    return (
        <div className={styles.boxWrapper}>
            {title ? <h1 className={styles.title}>{title}</h1> : null}
            <button className={styles.close} data-close={true}>
                <Icon name="close" className="icon" />
            </button>
            {children}
        </div>
    );
};

export default Default;
