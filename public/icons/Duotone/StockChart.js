import * as React from "react";

const SvgStockChart = ({ title, titleId, ...props }) => (
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
      d="m2 17 5.293-5.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0l3.586-3.586a1 1 0 0 1 1.414 0L22 15"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <circle cx={17} cy={10} r={2} fill="currentColor" />
    <circle cx={12} cy={15} r={2} fill="currentColor" />
    <circle cx={8} cy={11} r={2} fill="currentColor" />
  </svg>
);

export default SvgStockChart;
