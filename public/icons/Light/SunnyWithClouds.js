import * as React from "react";

const SvgSunnywithClouds = ({ title, titleId, ...props }) => (
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
      d="M8.5 18.4a6.9 6.9 0 1 1 6.263-9.8c.158.34.555.495.9.356l-.224-.557.225.557A4.9 4.9 0 1 1 17.5 18.4h-9Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M20.243 9.757 22 8l-1.757-1.757V3.757h-2.486L16 2l-1.757 1.757h-2.486V5.5"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgSunnywithClouds;
