import * as React from "react";

const SvgToggleOn = ({ title, titleId, ...props }) => (
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
      d="M17 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7 7h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgToggleOn;
