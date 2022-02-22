import * as React from "react";

const SvgTag = ({ title, titleId, ...props }) => (
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
      d="m3.707 14.293 9-9A1 1 0 0 1 13.414 5H19a1 1 0 0 1 1 1v5.586a1 1 0 0 1-.293.707l-9 9a1 1 0 0 1-1.414 0l-5.586-5.586a1 1 0 0 1 0-1.414Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <circle
      r={0.9}
      transform="matrix(-1 0 0 1 16.5 8.5)"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgTag;
