import React from 'react';
import { Icon } from '../../';
import styles from './Loading.module.scss';

const Loading = ({ title, children }) => {
    return (
        <div className={styles.boxWrapper} data-modal={true}>
            <h1 className={styles.title}>{title}</h1>
            {children}
            <Icon name="loader" className={styles.loader} />
        </div>
    );
};

export default Loading;
