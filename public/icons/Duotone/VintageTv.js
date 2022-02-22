import * as React from "react";

const SvgVintageTv = ({ title, titleId, ...props }) => (
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
      d="M18 11h1M5 2l6 6m2 0 6-6m-3 12v2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVintageTv;
