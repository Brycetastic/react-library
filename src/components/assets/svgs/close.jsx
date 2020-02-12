import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 16 16', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        fill="currentcolor"
        id="close"
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ''}`}
        {...other}
    >
        <g data-name="Symbol 88 – 5">
            <path
                data-name="Path 22801"
                d="M9.414 8l6.293 6.293a1 1 0 0 1 0 1.414 1 1 0 0 1-1.414 0L8 9.414l-6.293 6.293a1 1 0 0 1-1.414 0 1 1 0 0 1 0-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414z"
            />
        </g>
    </svg>
);

export default SVG;
