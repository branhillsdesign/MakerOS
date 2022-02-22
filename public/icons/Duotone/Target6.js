import * as React from "react";

const SvgTarget6 = ({ title, titleId, ...props }) => (
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
      d="M20.182 12H23m-11 8.182V23M3.818 12H1m11-8.182V1"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M20.182 12a8.182 8.182 0 1 1-16.364 0 8.182 8.182 0 0 1 16.364 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTarget6;
