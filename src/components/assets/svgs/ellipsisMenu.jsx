import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 192 512', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={`svg-inline--fa fa-ellipsis-v fa-w-6 ${className || ''}`}
        id="ellipsisMenu"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="ellipsis-v"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        {...other}
    >
        <path
            fill="currentColor"
            d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
        ></path>
    </svg>
);

export default SVG;
