import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '-1.5 0 11 11', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className || ''}
        id="chevronLeft"
        xmlns="http://www.w3.org/2000/svg"
        {...other}
    >
        <path d="M5.4 10.8L0 5.4 5.4 0l1.4 1.4-4 4 4 4z" fill="currentColor" />
    </svg>
);

export default SVG;
