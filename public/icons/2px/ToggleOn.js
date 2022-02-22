import * as React from "react";

const SvgToggleOn = ({ title, titleId, ...props }) => (
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
      d="M17 8H7V6h10v2ZM7 16h10v2H7v-2Zm7-4a3 3 0 0 1 3-3v2a1 1 0 0 0-1 1h-2Zm3 3a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Zm3-3a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1h2Zm-2 0a1 1 0 0 0-1-1V9a3 3 0 0 1 3 3h-2Zm-1 4a4 4 0 0 0 4-4h2a6 6 0 0 1-6 6v-2ZM3 12a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6h2Zm4-4a4 4 0 0 0-4 4H1a6 6 0 0 1 6-6v2Zm10-2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V6Z"
      fill="#555770"
    />
  </svg>
);

export default SvgToggleOn;
