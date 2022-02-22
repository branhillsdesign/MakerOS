import * as React from "react";

const SvgPlate = ({ title, titleId, ...props }) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPlate;
