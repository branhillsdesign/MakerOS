import * as React from "react";

const Svg = ({ title, titleId, ...props }) => (
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
      d="M17 21h-5a9 9 0 1 1 9-9v1.5a2.5 2.5 0 0 1-2.5 2.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0v1.5a2.5 2.5 0 0 0 2.5 2.5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default Svg;
