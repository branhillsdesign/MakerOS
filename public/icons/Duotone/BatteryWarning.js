import * as React from "react";

const SvgBatteryWarning = ({ title, titleId, ...props }) => (
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
    <path d="M14 4h3v17H7V4h4V2h2v2h1Z" stroke="#555770" strokeWidth={2} />
    <path d="M12 7v7m0 4v-2" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgBatteryWarning;
