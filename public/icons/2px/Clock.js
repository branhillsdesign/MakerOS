import * as React from "react";

const SvgClock = ({ title, titleId, ...props }) => (
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
      d="M11 12v.414l.293.293 4 4 1.414-1.414L13 11.586V5h-2v7Zm11 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgClock;
