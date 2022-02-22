import * as React from "react";

const SvgGrid = ({ title, titleId, ...props }) => (
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
      d="M15 3v18m6-12H3m18 6H3M9 3v18"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGrid;
