import * as React from "react";

const SvgGlasses = ({ title, titleId, ...props }) => (
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
      d="M9 11.5c0-.048-.001-.095-.003-.143A3.99 3.99 0 0 1 12 10a3.99 3.99 0 0 1 3.003 1.357A3.551 3.551 0 0 0 15 11.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM22 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGlasses;
