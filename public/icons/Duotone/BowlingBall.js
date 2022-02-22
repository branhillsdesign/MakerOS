import * as React from "react";

const SvgBowlingBall = ({ title, titleId, ...props }) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBowlingBall;
