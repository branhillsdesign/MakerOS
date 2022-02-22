import * as React from "react";

const SvgSave = ({ title, titleId, ...props }) => (
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
      d="M14 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M4 19V5a1 1 0 0 1 1-1h11.5L20 7.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSave;
