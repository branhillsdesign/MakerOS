import * as React from "react";

const SvgUnderline = ({ title, titleId, ...props }) => (
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
    <path d="M8 5v7a4 4 0 0 0 8 0V5" stroke="#555770" strokeWidth={2} />
    <path d="M5 19h14" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgUnderline;
