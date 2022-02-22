import * as React from "react";

const SvgRectangleSelection = ({ title, titleId, ...props }) => (
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
      d="M3 9v5m7-12h5m0 19h-5M22 9v5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M8 2H3v5m0 9v5h5m9-19h5v5m0 9v5h-5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRectangleSelection;
