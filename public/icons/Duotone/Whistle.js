import * as React from "react";

const SvgWhistle = ({ title, titleId, ...props }) => (
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
      d="M6 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M16 12a5 5 0 1 1-5-5m5 5a4.978 4.978 0 0 0-1-3m1 3c0-2 .5-3 2.5-3M11 7h10v2h-2.5M11 7c1.636 0 3.088.786 4 2m0 0h3.5M15 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWhistle;
