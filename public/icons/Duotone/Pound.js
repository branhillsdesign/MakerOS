import * as React from "react";

const SvgPound = ({ title, titleId, ...props }) => (
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
      d="M17 8.15C17 6.41 15.21 5 13 5S9 6.41 9 8.15C9 14 9.6 19 6 19c2 0 3.51-1 6.01-1 2 0 3.99 2 5.99 0"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M6 12h10" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgPound;
