import * as React from "react";

const SvgTextSize = ({ title, titleId, ...props }) => (
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
    <path d="M8 6h6m6 0h-6m0 0v14" stroke="#555770" strokeWidth={2} />
    <path d="M3 12h4m4 0H7m0 0v8" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgTextSize;
