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
    <path d="M11 4h6v17H7V4h4Z" stroke="#555770" strokeWidth={2} />
    <path d="M9 12.5 13 6v5h2l-4 7v-5.5H9Z" fill="#555770" />
  </svg>
);

export default SvgBatteryCharging;
