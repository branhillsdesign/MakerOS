import * as React from "react";

const SvgBattery11 = ({ title, titleId, ...props }) => (
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
    <path fill="currentColor" d="M7 4h10v17H7z" />
    <path d="M14 4h3v17H7V4h4V2h2v2h1Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgBattery11;
