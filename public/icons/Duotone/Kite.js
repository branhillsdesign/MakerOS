import * as React from "react";

const SvgKite = ({ title, titleId, ...props }) => (
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
      d="M7.684 2 22 16.316M22 2 5 19c-.333 1.333-1.6 4-4 4"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M20.21 3.79H9.474L5 19l15.21-4.474V3.79Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgKite;
