import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 16 16', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className}
        {...other}
        id="zoom"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        <title>zoom 2</title>
        <g className="nc-icon-wrapper" strokeWidth="1" fill="currentColor" stroke="currentColor">
            <circle
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                cx="7.5"
                cy="7.5"
                r="6"
            />{' '}
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                x1="15.5"
                y1="15.5"
                x2="11.742"
                y2="11.742"
            />{' '}
        </g>
    </svg>
);

export default SVG;
