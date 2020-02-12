import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 16 16', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className}
        id="upload"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        {...other}
    >
        <title>dots upload</title>
        <g className="nc-icon-wrapper" fill="currentColor">
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0.5,4.5v-3c0-0.552,0.448-1,1-1h3"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.5,0.5h3c0.552,0,1,0.448,1,1v3"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5,11.5v3c0,0.552-0.448,1-1,1h-3"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5,15.5h-3c-0.552,0-1-0.448-1-1v-3"
            />
            <polygon
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="12.5,7.5 8,2.5 3.5,7.5 6.5,7.5 6.5,13.5 9.5,13.5 9.5,7.5 "
                data-color="color-2"
            />
        </g>
    </svg>
);

export default SVG;
