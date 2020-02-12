import React from 'react';
import styles from './svgStyles.module.scss';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 100 100', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className}
        version="1.1"
        id="svg_success"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={{ enableBackground: 'new 0 0 100 100' }}
        {...other}
        //  xmlns:xlink="http://www.w3.org/1999/xlink"
        //  xml:space="preserve"
    >
        <g transform="translate(-4714 -6740)">
            <circle className={styles.success} cx="4764" cy="6790" r="50" />

            <linearGradient
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="4373.3555"
                y1="7093.186"
                x2="4374.6333"
                y2="7092.1772"
                gradientTransform="matrix(75.528 0 0 -64.543 -325589.375 464581.0625)"
            >
                <stop offset="0" style={{ stopColor: '#219451' }} />
                <stop offset="1" style={{ stopColor: '#219451', stopOpacity: 0 }} />
            </linearGradient>
            <path
                className={styles.success1}
                d="M4737.5,6791.2l8.4,0.6l10.5,5.2l34-22.7l22.6,25.6c-4,19.5-19.2,34.8-38.7,38.9L4737.5,6791.2z"
            />
            <g className={styles.icon2}>
                <path
                    className={styles.icon3}
                    d="M4737.7,6791.5c-0.5-0.5-0.7-1.1-0.7-1.9s0.2-1.4,0.7-1.9l3.9-3.8c0.5-0.6,1.1-0.8,1.8-0.8s1.4,0.3,2,0.8
			l11.8,11.8l25.3-25.3c0.6-0.6,1.2-0.8,2-0.8s1.4,0.3,1.8,0.8l3.9,3.8c0.5,0.5,0.7,1.1,0.7,1.9s-0.2,1.4-0.7,1.9l-31.1,31
			c-0.5,0.6-1.1,0.8-1.9,0.8s-1.4-0.3-1.9-0.8L4737.7,6791.5z"
                />
            </g>
        </g>
    </svg>
);

export default SVG;

// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
