import React from 'react';
import styles from './svgStyles.module.scss';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 100 100', ...other }) => (
    <svg
        width={width}
        viewBox={viewBox}
        className={className}
        version="1.1"
        id="svg_info"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={{ enableBackground: 'new 0 0 100 100' }}
        {...other}

        // xmlns:xlink="http://www.w3.org/1999/xlink"
        // xml:space="preserve"
    >
        <g transform="translate(-4714 -6740)">
            <circle className={styles.info} cx="4764" cy="6790" r="50" />

            <linearGradient
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="4375.1899"
                y1="7093.5439"
                x2="4376.6089"
                y2="7092.0269"
                gradientTransform="matrix(54.79 0 0 -73.888 -234968.1094 530893.625)"
            >
                <stop offset="0" style={{ stopColor: '#026089' }} />
                <stop offset="1" style={{ stopColor: '#026089', stopOpacity: 0 }} />
            </linearGradient>
            <path
                className={styles.info1}
                d="M4754.4,6816.2l12.2-11.4l-8.3-6.2l4.6-11.5l3.7-1l-8.7-11l11.9-9.5l39.5,45.9c-7.1,14.9-20.9,25.3-37.2,27.9
		L4754.4,6816.2z"
            />
            <g className={styles.icon2}>
                <path
                    className={styles.icon3}
                    d="M4758,6807.5v-15.2h-2.1c-0.6,0-1.1-0.2-1.5-0.6s-0.6-0.9-0.6-1.5v-5.1c0-0.6,0.2-1.1,0.6-1.5
			s0.9-0.6,1.5-0.6h11.8c0.6,0,1.1,0.2,1.5,0.6s0.6,0.9,0.6,1.5v22.4h2.1c0.6,0,1.1,0.2,1.5,0.6s0.6,0.9,0.6,1.5v5.1
			c0,0.6-0.2,1.1-0.6,1.5s-0.9,0.6-1.5,0.6h-16c-0.6,0-1.1-0.2-1.5-0.6s-0.6-0.9-0.6-1.5v-5.1c0-0.6,0.2-1.1,0.6-1.5
			s0.9-0.6,1.5-0.6H4758z M4758.5,6765c-1.5,1.5-2.2,3.3-2.2,5.4s0.7,3.9,2.2,5.4s3.3,2.2,5.4,2.2s3.9-0.7,5.4-2.2s2.2-3.3,2.2-5.4
			s-0.7-3.9-2.2-5.4s-3.3-2.2-5.4-2.2S4760,6763.5,4758.5,6765z"
                />
            </g>
        </g>
    </svg>
);

export default SVG;

// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
