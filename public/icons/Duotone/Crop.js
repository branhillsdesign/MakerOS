import * as React from "react";

const SvgCrop = ({ title, titleId, ...props }) => (
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
    <path d="M2 6h16v16" stroke="currentColor" strokeWidth={2} />
    <path d="M6 2v16h16" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgCrop;
