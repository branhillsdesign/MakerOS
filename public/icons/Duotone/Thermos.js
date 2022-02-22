import * as React from "react";

const SvgThermos = ({ title, titleId, ...props }) => (
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
      d="M7 9h10m0 0v.5a.5.5 0 0 0 1 0 .5.5 0 0 0-.5-.5H17Zm-5.5-6h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M7 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgThermos;
