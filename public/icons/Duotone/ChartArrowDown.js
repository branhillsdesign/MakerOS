import * as React from "react";

const SvgChartArrowDown = ({ title, titleId, ...props }) => (
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
    <path d="m21 17-8-8-4 4-6-6" stroke="currentColor" strokeWidth={2} />
    <path d="M17 17h4v-4" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgChartArrowDown;