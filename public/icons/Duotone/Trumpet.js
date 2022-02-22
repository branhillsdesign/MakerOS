import * as React from "react";

const SvgTrumpet = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M8.5 18h-1a3.5 3.5 0 1 1 0-7h7a3.5 3.5 0 1 1 0 7h-1m-5 0V9m0 9h5m0 0V9"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M14.5 11H1m13.5 0c1.753 0 4.59-.383 6.5-1.622M14.5 11c1.753 0 4.59.383 6.5 1.622M1 11V9.5M1 11v1.5m20-3.122c1.176-.764 2-1.853 2-3.378v10c0-1.525-.824-2.614-2-3.378m0-3.244v3.244"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTrumpet;
