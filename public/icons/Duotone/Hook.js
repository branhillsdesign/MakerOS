import * as React from "react";

const SvgHook = ({ title, titleId, ...props }) => (
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
      d="M8 6v11.5a4.5 4.5 0 1 0 9 0v-3m0 0V14l.5.5H17Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M10 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHook;
