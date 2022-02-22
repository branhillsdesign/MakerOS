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
      d="M2 17v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4M2 17V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10M2 17l5-5m15 3-4-4m-2 0-3 3m-2 0-2-2"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <circle cx={17} cy={10} r={1.4} stroke="#555770" strokeWidth={1.2} />
    <circle cx={12} cy={15} r={1.4} stroke="#555770" strokeWidth={1.2} />
    <circle cx={8} cy={11} r={1.4} stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgStockChart;
