import * as React from "react";

const SvgMovieTape = ({ title, titleId, ...props }) => (
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
      d="M10 14.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM18 14.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMovieTape;
