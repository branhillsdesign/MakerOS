import * as React from "react";

const SvgMoreHorizontal4 = ({ title, titleId, ...props }) => (
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
      d="M5.75 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm7.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm7.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      stroke="#555770"
      strokeWidth={2.5}
    />
  </svg>
);

export default SvgMoreHorizontal4;
