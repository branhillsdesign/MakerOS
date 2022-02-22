import * as React from "react";

const SvgMemory = ({ title, titleId, ...props }) => (
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
      d="M10 3v3m4-3v3m7 4h-3m3 4h-3m-4 7v-3m-4 3v-3m-7-4h3m-3-4h3m4 0v4h4v-4h-4Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M7 6h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMemory;
