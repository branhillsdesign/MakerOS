import * as React from "react";

const SvgQuote = ({ title, titleId, ...props }) => (
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
      d="M10.364 12.444H6V8h4.364v4.444Zm0 0L8.182 18"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18 12.444h-4.364V8H18v4.444Zm0 0L15.818 18"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgQuote;
