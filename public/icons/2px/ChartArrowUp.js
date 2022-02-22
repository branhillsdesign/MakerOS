import * as React from "react";

const SvgChartArrowUp = ({ title, titleId, ...props }) => (
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
    <path d="M17 7h4m0 0v4m0-4-8 8-4-4-6 6" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgChartArrowUp;
