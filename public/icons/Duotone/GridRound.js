import * as React from "react";

const SvgGridRound = ({ title, titleId, ...props }) => (
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
      d="M4 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm10 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M4 17a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM14 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGridRound;
