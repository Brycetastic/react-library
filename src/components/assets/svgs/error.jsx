import React from 'react';
import styles from './svgStyles.module.scss';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 100 100', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className || ''}
        version="1.1"
        id="svg_error"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={{ enableBackground: 'new 0 0 100 100' }}
        {...other}

        // xml:space="preserve"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <g transform="translate(-4714 -6740)">
            <circle className={styles.error} cx="4764" cy="6790" r="50" />

            <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="4375.2808"
                y1="7093.79"
                x2="4376.5645"
                y2="7092.29"
                gradientTransform="matrix(53.131 0 0 -74.852 -227717.2969 537733.375)"
            >
                <stop offset="0" style={{ stopColor: '#761D23' }} />
                <stop offset="1" style={{ stopColor: '#761D23', stopOpacity: 0 }} />
            </linearGradient>
            <path
                className={styles.error1}
                d="M4757,6813.2l8.7-8.1l-7.3-9.5l4.5-8.6l-1.8-7.3v-10.5l9.6-5.5l39.4,45.6c-6.1,14.6-18.7,25.4-34,29.3
		L4757,6813.2z"
            />
            <g className={styles.icon2}>
                <path
                    className={styles.icon3}
                    d="M4769.8,6814.3c-1.7,1.7-3.6,2.5-6,2.5s-4.3-0.8-6-2.5s-2.5-3.6-2.5-6s0.8-4.3,2.5-6s3.6-2.5,6-2.5
			s4.3,0.8,6,2.5s2.5,3.6,2.5,6S4771.5,6812.6,4769.8,6814.3z M4757.9,6794.1c0,0.7,0.2,1.3,0.7,1.7s1.1,0.7,1.8,0.7h7
			c0.7,0,1.3-0.2,1.8-0.7s0.7-1,0.7-1.7l1.5-28.7c0-0.7-0.2-1.3-0.7-1.8s-1.1-0.8-1.8-0.8h-9.9c-0.7,0-1.3,0.3-1.8,0.8
			s-0.7,1.1-0.7,1.8L4757.9,6794.1z"
                />
            </g>
        </g>
    </svg>
);

export default SVG;

// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
