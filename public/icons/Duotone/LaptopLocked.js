import * as React from "react";

const SvgLaptopLocked = ({ title, titleId, ...props }) => (
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
    <path d="M24 19H0" stroke="currentColor" strokeWidth={2} />
    <path
      d="M21 17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M22 7.5V5a3 3 0 1 0-6 0v2.5m6 0h-6m6 0h.9a.1.1 0 0 1 .1.1V12a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V7.6a.1.1 0 0 1 .1-.1h.9"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLaptopLocked;
