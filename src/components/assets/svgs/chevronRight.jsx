import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '-2.5 0 11 11', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className || ''}
        id="chevronRight"
        xmlns="http://www.w3.org/2000/svg"
        {...other}
    >
        <path data-name="Path 23952" d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" fill="currentColor" />
    </svg>
);

export default SVG;
