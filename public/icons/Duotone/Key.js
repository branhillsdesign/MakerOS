import * as React from "react";

const SvgKey = ({ title, titleId, ...props }) => (
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
      d="M1 12a6 6 0 0 0 11.659 2H17v4h4v-4h2v-4H12.659A6 6 0 0 0 1 12Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M9 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgKey;
