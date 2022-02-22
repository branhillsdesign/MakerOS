import * as React from "react";

const SvgHeadset = ({ title, titleId, ...props }) => (
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
      d="M4 10a8 8 0 1 1 16 0v6.276a2 2 0 0 1-.57 1.398l-3.642 3.724a2 2 0 0 1-1.43.602H12"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M2 11h2v4H2v-4Zm18 0h2v4h-2v-4Zm-9 10h2v1h-2v-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeadset;
