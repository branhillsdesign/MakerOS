import * as React from "react";

const SvgMessageDotsRight = ({ title, titleId, ...props }) => (
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
      d="M4 5h15a1 1 0 0 1 1 1v4l2 2-2 2v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M13 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMessageDotsRight;
