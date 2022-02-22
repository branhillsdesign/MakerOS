import * as React from "react";

const SvgMouse = ({ title, titleId, ...props }) => (
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
      d="M13 8a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2Zm0-3v3h2V8h-2Z"
      fill="currentColor"
    />
    <path
      d="M7 9a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V9Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMouse;
