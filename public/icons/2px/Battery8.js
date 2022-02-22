import * as React from "react";

const SvgBattery8 = ({ title, titleId, ...props }) => (
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
    <path fill="#555770" d="M7 13h10v8H7z" />
  </svg>
);

export default SvgBattery8;
