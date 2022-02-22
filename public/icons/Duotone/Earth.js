import * as React from "react";

const SvgEarth = ({ title, titleId, ...props }) => (
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
      d="m4 8 5.16 7.74a5 5 0 0 1 .84 2.774V21m6-17v2a1.5 1.5 0 0 1-1.5 1.5h-.25c-.69 0-1.25.56-1.25 1.25v.05a1.2 1.2 0 0 1-1.2 1.2 1.8 1.8 0 0 0-1.8 1.8v.6a1.6 1.6 0 0 0 1.6 1.6h2.9a3 3 0 0 1 3 3v2"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 12a9 9 0 1 1-18 0 8.996 8.996 0 0 1 9-9c1.282 0 2.499.267 3.6.748A9.002 9.002 0 0 1 21 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEarth;
