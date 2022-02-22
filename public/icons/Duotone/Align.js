import * as React from "react";

const SvgAlign = ({ title, titleId, ...props }) => (
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
    <path d="M4 6h16M4 14h16" stroke="#555770" strokeWidth={2} />
    <path d="M4 10h16M4 18h16" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgAlign;
