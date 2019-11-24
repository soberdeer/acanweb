import React from 'react';
import PropTypes from 'prop-types';

export default function Canned({ size, ...others }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 512" height={size} {...others}>

      <rect x="25" y="37.5" width="320" height="437" fill="#ffa200" />
      <rect x="315" y="37.5" width="30" height="437" fill="#ff8b00" />
      <rect x="25" y="206" width="320" height="100" fill="#2ebbf0" />
      <rect x="315" y="206" width="30" height="100" fill="#00a9da" />
      <rect x="7.5" y="7.5" width="355" height="30" fill="#c3e9f7" />
      <rect x="7.5" y="474.5" width="355" height="30" fill="#c3e9f7" />
      <rect x="332.5" y="474.5" width="30" height="30" fill="#97d7f0" />
      <rect x="332.5" y="7.5" width="30" height="30" fill="#97d7f0" />
      <circle cx="185" cy="256" r="130" fill="#ffd237" />
      <path
        d="M416,71.75a7.5,7.5,0,0,0,7.5-7.5V45h10a7.5,7.5,0,0,0,7.5-7.5V7.5A7.5,7.5,0,0,0,433.5,0H78.5A7.5,7.5,0,0,0,71,7.5v30A7.5,7.5,0,0,0,78.5,45h10V416.5a7.5,7.5,0,0,0,15,0v-103h27.62a137.47,137.47,0,0,0,249.77,0H408.5V467h-305V448a7.5,7.5,0,0,0-15,0v19h-10a7.5,7.5,0,0,0-7.5,7.5v30a7.5,7.5,0,0,0,7.5,7.5h355a7.5,7.5,0,0,0,7.5-7.5v-30a7.5,7.5,0,0,0-7.5-7.5h-10V96.5a7.5,7.5,0,0,0-15,0v102H380.88a137.54,137.54,0,0,0-189.76-63.76A7.5,7.5,0,0,0,198.21,148a122.67,122.67,0,1,1-24.73,17.5,7.5,7.5,0,1,0-10.11-11.08,137.6,137.6,0,0,0-32.23,44.12H103.5V45h305V64.25A7.5,7.5,0,0,0,416,71.75Z"
        transform="translate(-71)"
      />
      <polygon points="355 497 15 497 15 482 25 482 345 482 355 482 355 497" />
      <path d="M408.5,213.5v85H386.77a137.54,137.54,0,0,0,0-85Z" transform="translate(-71)" />
      <path d="M125.26,213.5a137.22,137.22,0,0,0,0,85H103.5v-85Z" transform="translate(-71)" />
      <polygon points="25 30 15 30 15 15 355 15 355 30 345 30 25 30" />
      <path
        d="M355,285.5a91.67,91.67,0,0,0-23.17-30A90.94,90.94,0,0,0,354.59,225" transform="translate(-71)" fill="none"
        stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="15"
      />
      <path
        d="M331.87,255.48a66.74,66.74,0,0,0-17.53-14.08c-20.46-11.2-44.57-17.05-69.73-16.92a147.87,147.87,0,0,0-48.24,8.31,124.27,124.27,0,0,0-38.75,21.81,2.54,2.54,0,0,0,0,4.06,124.82,124.82,0,0,0,39.16,21.22,148.17,148.17,0,0,0,48.36,7.59c25.18-.15,49.2-6.29,69.47-17.75a65.93,65.93,0,0,0,17.2-14.26"
        transform="translate(-71)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="15"
      />
      <circle cx="131.85" cy="253.07" r="7.53" />
    </svg>
  );
}

Canned.propTypes = {
  size: PropTypes.number,
};

Canned.defaultProps = {
  size: 18,
};
