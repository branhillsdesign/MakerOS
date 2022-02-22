import * as React from "react";

const SvgSend = ({ title, titleId, ...props }) => (
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
      d="M22 3 2 11l6 1.765L22 3Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="m13 22 9-19-10.765 13L13 22Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSend;
