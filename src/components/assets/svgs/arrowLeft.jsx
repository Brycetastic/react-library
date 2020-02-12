import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 256 512', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={`svg-inline--fa fa-angle-left fa-w-8 ${className || ''}`}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        id="arrowLeft"
        {...other}
    >
        <path
            fill="currentColor"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
        />
    </svg>
);

export default SVG;
