import React from 'react';
import styles from './dotLoader.module.scss';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 48 12', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        fill="currentcolor"
        id="dotLoader"
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${styles.dotLoader} ${className || ''}`}
        {...other}
    >
        <g id="dotLoaderG" className={styles.dotLoaderG}>
            <circle cx="6" cy="6" r="6" id="dotLoader1" className={styles.dotLoader1} />
            <circle cx="6" cy="6" r="6" id="dotLoader2" className={styles.dotLoader2} />
            <circle cx="6" cy="6" r="6" id="dotLoader3" className={styles.dotLoader3} />
        </g>
    </svg>
);

export default SVG;
