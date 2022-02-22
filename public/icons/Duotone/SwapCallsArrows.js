import * as React from "react";

const SvgSwapCallsArrows = ({ title, titleId, ...props }) => (
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
      d="M6 16V8a3 3 0 0 1 6 0v7a3 3 0 1 0 6 0V7"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6 17.5 7.5 16h-3L6 17.5ZM16.5 7 18 5.5 19.5 7h-3Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSwapCallsArrows;
