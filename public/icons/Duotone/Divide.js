import * as React from "react";

const SvgDivide = ({ title, titleId, ...props }) => (
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
    <path d="M20 12H4" stroke="#555770" strokeWidth={2} />
    <path
      d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDivide;
