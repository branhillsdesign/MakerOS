import * as React from "react";

const SvgMoreHorizontal01 = ({ title, titleId, ...props }) => (
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
      d="M6.4 12a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Zm7.5 0a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Zm7.5 0a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgMoreHorizontal01;
