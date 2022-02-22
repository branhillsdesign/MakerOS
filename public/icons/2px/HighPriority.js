import * as React from "react";

const SvgHighPriority = ({ title, titleId, ...props }) => (
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
    <path d="M9 3v6l3-3-3-3Z" fill="#555770" />
    <path
      d="M8.5 7A4.5 4.5 0 0 0 4 11.5H2A6.5 6.5 0 0 1 8.5 5v2ZM4 11.5A4.5 4.5 0 0 0 8.5 16v2A6.5 6.5 0 0 1 2 11.5h2ZM22 18h-8v-2h8v2Zm0-5.5h-8v-2h8v2ZM22 7h-8V5h8v2ZM8.5 16H12v2H8.5v-2Zm0-11H10v2H8.5V5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHighPriority;
