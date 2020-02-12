import React from 'react';
import styles from './svgStyles.module.scss';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 100 100', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className}
        version="1.1"
        id="svg_warning"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={{ enableBackground: 'new 0 0 100 100' }}
        {...other}

        // xmlns:xlink="http://www.w3.org/1999/xlink"
        // xml:space="preserve"
    >
        <g transform="translate(-4714 -6740)">
            <circle className={styles.warning} cx="4764" cy="6790" r="50" />

            <linearGradient
                id="SVGID_4_"
                gradientUnits="userSpaceOnUse"
                x1="4374.2061"
                y1="7093.6948"
                x2="4375.394"
                y2="7092.168"
                gradientTransform="matrix(64.751 0 0 -70.432 -278495.4375 506368.8125)"
            >
                <stop offset="0" style={{ stopColor: '#AC7200' }} />
                <stop offset="1" style={{ stopColor: '#AC7200', stopOpacity: 0 }} />
            </linearGradient>
            <path
                className={styles.warning1}
                d="M4757.6,6813.5l6.9-6.9l-6.6-8.6l1.8-5.8l-13-16.8l8.1-7.4l24.8,1.6l31.8,36.4c-5.4,16-18.4,28.1-34.7,32.5
		L4757.6,6813.5z"
            />
            <g className={styles.icon2}>
                <path
                    className={styles.icon3}
                    d="M4764.8,6762.8c3,0,6,0.7,8.8,2.2s5.2,3.4,6.9,5.7c1.9,2.6,2.8,5.4,2.8,8.3c0,2.3-0.5,4.4-1.5,6.1
			c-0.8,1.5-2,2.8-3.5,4c-0.9,0.7-2.3,1.6-4.1,2.6c-1.5,0.8-2.5,1.5-3,1.9c-0.8,0.7-1.3,1.4-1.3,2.2v0.6c0,0.7-0.2,1.3-0.7,1.8
			s-1.1,0.7-1.8,0.7h-7.6c-0.7,0-1.3-0.2-1.8-0.7s-0.7-1.1-0.7-1.8v-1.1c0-2.8,0.9-5.2,2.7-7.2c1.1-1.1,3-2.4,5.7-3.9l0.2-0.1
			c1.9-1.1,3.2-1.9,3.8-2.5c0.9-0.8,1.4-1.8,1.4-2.8c0-1.5-0.8-2.8-2.4-3.8c-1.5-1-3.1-1.5-4.9-1.5c-1.9,0-3.5,0.5-4.9,1.4
			c-1.1,0.7-2.4,2-3.9,3.8c-0.4,0.6-1,0.9-1.6,1s-1.3-0.1-1.8-0.5l-4.5-3.5c-0.6-0.4-0.9-1-1-1.6s0.1-1.3,0.5-1.8
			c2.2-3.2,4.7-5.5,7.5-7.1C4757.2,6763.6,4760.7,6762.8,4764.8,6762.8z M4763.8,6802.1c2,0,3.8,0.7,5.2,2.2s2.1,3.2,2.1,5.2
			s-0.7,3.7-2.1,5.2s-3.1,2.2-5.2,2.2s-3.8-0.7-5.2-2.2s-2.1-3.2-2.1-5.2s0.7-3.7,2.1-5.2S4761.7,6802.1,4763.8,6802.1z"
                />
            </g>
        </g>
    </svg>
);

export default SVG;

// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
