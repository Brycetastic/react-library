import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 16 16', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className}
        id="filterOutline"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        {...other}
    >
        <title>funnel 40</title>
        <g className="nc-icon-wrapper" fill="currentColor">
            <polygon
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="0.5,1.5 15.5,1.5 9.5,9.5 9.5,15.5 6.5,15.5 6.5,9.5 "
            />{' '}
        </g>
    </svg>
);

export default SVG;
