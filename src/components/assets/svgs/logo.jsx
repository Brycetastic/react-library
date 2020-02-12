import React from 'react';

const SVG = ({ width = '29', height = '29', className = '', viewBox = '0 0 29 29', ...other }) => (
    <svg
        width={width}
        height={height}
        viewBox={viewBox}
        className={`overstock-logo ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        {...other}
    >
        <g fill="#FF1F2C" fill-rule="evenodd">
            <path d="M.666.06v14.66C2.828 8.896 8.816 4.443 14.9 4.443c6.74 0 11.04 5.464 9.609 12.202-1.105 5.195-5.295 9.628-10.243 11.388h14.374V.061H.666z"></path>
            <path d="M20.04 16.645c0-5.824-3.463-10.547-7.734-10.547s-7.734 4.723-7.734 10.547c0 5.825 3.463 10.547 7.734 10.547s7.734-4.722 7.734-10.547"></path>
        </g>
    </svg>
);

export default SVG;
