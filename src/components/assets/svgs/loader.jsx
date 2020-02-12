import React from 'react';

const SVG = ({ width = '100%', className = '', viewBox = '0 0 100 100', ...other }) => (
    <svg width={width} viewBox={viewBox} className={className} xmlns="http://www.w3.org/2000/svg" {...other}>
        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="50" y1="70" x2="90" y2="70">
            <stop offset=".001" stopColor="#026089" />
            <stop offset=".515" stopColor="#01557a" />
            <stop offset="1" stopColor="#014f71" />
        </linearGradient>
        <path d="M78 50c0 15.5-12.5 28-28 28v12c22.1 0 40-17.9 40-40H78z" fill="url(#a)" />
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="37.807" y1="80.329" x2="22.914" y2="63.894">
            <stop offset="0" stopColor="#026089" />
            <stop offset=".529" stopColor="#026b99" />
            <stop offset="1" stopColor="#0272a2" />
        </linearGradient>
        <path d="M22 50H10c0 22.1 17.9 40 40 40V78c-15.5 0-28-12.5-28-28z" fill="url(#b)" />
        <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="22.808" y1="36.368" x2="37.432" y2="20.057">
            <stop offset="0" stopColor="#0272a2" />
            <stop offset=".155" stopColor="#0276ab" />
            <stop offset=".679" stopColor="#0481c3" />
            <stop offset="1" stopColor="#0485cc" />
        </linearGradient>
        <path d="M50 22V10c-22.1 0-40 17.9-40 40h12c0-15.5 12.5-28 28-28z" fill="url(#c)" />
        <path d="M50 10v12c15.5 0 28 12.5 28 28h12c0-22.1-17.9-40-40-40z" fill="#0485cc" />
    </svg>
);

export default SVG;
