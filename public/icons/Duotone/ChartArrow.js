import * as React from "react";

const SvgChartArrow = ({ title, titleId, ...props }) => (
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
      d="m4 15 4-4 4 4 8-8m0 0h-4m4 0v4"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M21 20H4V4" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgChartArrow;
