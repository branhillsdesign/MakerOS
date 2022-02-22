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
      d="M8.5 16.4a4.9 4.9 0 0 1-4.9-4.9H2.4a6.1 6.1 0 0 0 6.1 6.1v-1.2Zm-4.9-4.9a4.9 4.9 0 0 1 4.9-4.9V5.4a6.1 6.1 0 0 0-6.1 6.1h1.2ZM22 5.4h-8v1.2h8V5.4Zm0 5.5h-8v1.2h8v-1.2Zm0 5.5h-8v1.2h8v-1.2ZM8.5 6.6H12V5.4H8.5v1.2Zm0 11H10v-1.2H8.5v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLowPriority;
