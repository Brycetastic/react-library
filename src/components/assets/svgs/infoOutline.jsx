import React from 'react';

const SVG = ({ width = '12', height = '12', className = '', ...other }) => (
    <svg
        width={width}
        height={height}
        className={className}
        {...other}
        id="infoOutline"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            data-name="Union 806"
            d="M-.002 5.996a6 6 0 1 1 6 6 6.014 6.014 0 0 1-6-6zm1.5 0a4.5 4.5 0 1 0 4.5-4.5 4.512 4.512 0 0 0-4.5 4.5zm3.75 3v-3.75h1.5v3.75zm0-5.246A.752.752 0 1 1 6 4.496a.754.754 0 0 1-.752-.746z"
            fill="currentColor"
        />
    </svg>
);

export default SVG;
