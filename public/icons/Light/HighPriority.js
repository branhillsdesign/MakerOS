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
      d="M8.5 6.6a4.9 4.9 0 0 0-4.9 4.9H2.4a6.1 6.1 0 0 1 6.1-6.1v1.2Zm-4.9 4.9a4.9 4.9 0 0 0 4.9 4.9v1.2a6.1 6.1 0 0 1-6.1-6.1h1.2ZM22 17.6h-8v-1.2h8v1.2Zm0-5.5h-8v-1.2h8v1.2Zm0-5.5h-8V5.4h8v1.2ZM8.5 16.4H12v1.2H8.5v-1.2Zm0-11H10v1.2H8.5V5.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHighPriority;
