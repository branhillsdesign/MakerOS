import * as React from "react";

const SvgRightAlign = ({ title, titleId, ...props }) => (
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
    <path d="M8 6h12M8 14h12" stroke="#555770" strokeWidth={2} />
    <path d="M4 10h16M6 18h14" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgRightAlign;
