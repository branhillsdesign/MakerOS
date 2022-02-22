import * as React from "react";

const SvgTimelapse = ({ title, titleId, ...props }) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 17a5 5 0 0 0 1-9.9V12l-4 4c.836.628 1.874 1 3 1Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTimelapse;
