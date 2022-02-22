import * as React from "react";

const SvgTree = ({ title, titleId, ...props }) => (
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
    <path d="M12 14v7m0 0H5m7 0h7" stroke="currentColor" strokeWidth={2} />
    <path
      d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTree;
