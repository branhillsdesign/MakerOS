import * as React from "react";

const SvgBugCheck = ({ title, titleId, ...props }) => (
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
      d="M6 17H2m16 0h4m-4-8h4M6 9H2m0 4h4m16 0h-4M6 1l2.876 2.876M18 1l-2.876 2.876"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6 9a5.996 5.996 0 0 1 6-6 5.996 5.996 0 0 1 6 6v8a6 6 0 0 1-12 0V9Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M9 12.154 11.063 14 15 10" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgBugCheck;
