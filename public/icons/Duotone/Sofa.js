import * as React from "react";

const SvgSofa = ({ title, titleId, ...props }) => (
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
      d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M5 12v3h14v-3a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-5a2 2 0 1 1 4 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSofa;
