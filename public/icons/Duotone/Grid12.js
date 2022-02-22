import * as React from "react";

const SvgGrid12 = ({ title, titleId, ...props }) => (
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
    <path d="M2 10V4h20v6H2Z" stroke="#555770" strokeWidth={2} />
    <path d="M2 20v-6h20v6H2Z" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgGrid12;
