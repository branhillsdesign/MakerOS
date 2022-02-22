import * as React from "react";

const SvgListRound = ({ title, titleId, ...props }) => (
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
      d="M3 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgListRound;
