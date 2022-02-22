import * as React from "react";

const SvgPills = ({ title, titleId, ...props }) => (
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
    <path d="M11 11h6v6h-6v-6Z" stroke="currentColor" strokeWidth={2} />
    <path
      d="M7 19V7h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3H6V4Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPills;
