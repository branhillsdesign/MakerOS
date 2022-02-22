import * as React from "react";

const SvgDiamonds = ({ title, titleId, ...props }) => (
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
      d="M4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7.37 12 12 7.37 16.63 12 12 16.63 7.37 12Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDiamonds;
