import * as React from "react";

const SvgBattery02 = ({ title, titleId, ...props }) => (
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
    <path fill="#555770" d="M7 17h10v4H7z" />
  </svg>
);

export default SvgBattery02;
