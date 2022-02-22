import * as React from "react";

const SvgBatteryCharging = ({ title, titleId, ...props }) => (
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
      d="M17.4 3.6v17.8H6.6V3.6h3.5v-2h3.8v2h3.5Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M9 12.958 13 7v4.583h2L11 18v-5.042H9Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgBatteryCharging;
