import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '-.3 -1.5 10 10', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className || ''}
        id="checkLight"
        xmlns="http://www.w3.org/2000/svg"
        {...other}
    >
        <path
            fill="currentColor"
            data-name="Path 26577"
            d="M9.133 1.134L3.799 6.467a.6.6 0 0 1-.466.2.6.6 0 0 1-.467-.2L.199 3.801a.646.646 0 0 1 0-.934.646.646 0 0 1 .934 0l2.2 2.2L8.199.201a.644.644 0 0 1 .934 0 .645.645 0 0 1 0 .933z"
        />
    </svg>
);

export default SVG;
