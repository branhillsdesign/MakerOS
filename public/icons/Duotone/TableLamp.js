import * as React from "react";

const SvgTableLamp = ({ title, titleId, ...props }) => (
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
      d="M12 12H5L7 2h10l2 10h-7Zm0 0v3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M8 16h-.5v-1h9v1H16m-8 0 1 6h6l1-6m-8 0h8"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTableLamp;
