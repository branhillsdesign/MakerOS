import * as React from "react";

const SvgToggleOff = ({ title, titleId, ...props }) => (
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
      d="M7 8h10V6H7v2Zm10 8H7v2h10v-2Zm-7-4a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm-3 3a3 3 0 0 0 3-3H8a1 1 0 0 1-1 1v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H4Zm2 0a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3h2Zm1 4a4 4 0 0 1-4-4H1a6 6 0 0 0 6 6v-2Zm14-4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6v2ZM7 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6Z"
      fill="#555770"
    />
  </svg>
);

export default SvgToggleOff;
