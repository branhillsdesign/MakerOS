import * as React from "react";

const SvgSpades = ({ title, titleId, ...props }) => (
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
      d="M19 1H5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M11.253 15.21a2.838 2.838 0 0 1-3.713-4.256l4.61-4.481 4.31 4.481a2.838 2.838 0 0 1-3.713 4.256m-1.494 0L11 17.528h2l-.253-2.316m-1.494 0 .747-.747.747.747m-1.494 0h1.494"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSpades;
