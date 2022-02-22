import * as React from "react";

const SvgLowPriority = ({ title, titleId, ...props }) => (
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
    <path d="M9 20v-6l3 3-3 3Z" fill="#555770" />
    <path
      d="M8.5 16A4.5 4.5 0 0 1 4 11.5H2A6.5 6.5 0 0 0 8.5 18v-2ZM4 11.5A4.5 4.5 0 0 1 8.5 7V5A6.5 6.5 0 0 0 2 11.5h2ZM22 5h-8v2h8V5Zm0 5.5h-8v2h8v-2Zm0 5.5h-8v2h8v-2ZM8.5 7H12V5H8.5v2Zm0 11H10v-2H8.5v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLowPriority;
