import * as React from "react";

const SvgItalicAlign = ({ title, titleId, ...props }) => (
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
    <path d="M6 10h13M4 18h13" stroke="currentColor" strokeWidth={2} />
    <path d="M7 6h13M5 14h13" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgItalicAlign;
