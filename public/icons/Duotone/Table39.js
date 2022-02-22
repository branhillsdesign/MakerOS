import * as React from "react";

const SvgTable39 = ({ title, titleId, ...props }) => (
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
    <path d="M21 12H3m9-9v18" stroke="currentColor" strokeWidth={2} />
    <path d="M20 12v8H4V4h16v8Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgTable39;
