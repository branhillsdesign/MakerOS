import * as React from "react";

const SvgManLeftHandUp = ({ title, titleId, ...props }) => (
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
      d="M10.5 22V9H12m1.5 13V9H12m0 6V9"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M8.5 9h-7m15-1v7M13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgManLeftHandUp;
