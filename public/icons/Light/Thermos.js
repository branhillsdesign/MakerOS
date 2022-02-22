import * as React from "react";

const SvgThermos = ({ title, titleId, ...props }) => (
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
      d="M7 9v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V10M7 9V4a1 1 0 0 1 1-1h1M7 9h10m0 0V4a1 1 0 0 0-1-1h-4m5 6v1m0-1h.5a.5.5 0 0 1 0 1H17M9 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1M9 3h3"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgThermos;
