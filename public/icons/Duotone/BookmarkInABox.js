import * as React from "react";

const SvgBookmarkinaBox = ({ title, titleId, ...props }) => (
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
      d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M10.564 13.762 10 13.378l-.564.384L6 16.107V6h8v10.107l-3.436-2.345Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBookmarkinaBox;
