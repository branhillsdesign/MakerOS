import * as React from "react";

const SvgMessageDotsLeft = ({ title, titleId, ...props }) => (
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
      d="M20 19H5a1 1 0 0 1-1-1v-4l-2-2 2-2V6a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M14 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMessageDotsLeft;
