import * as React from "react";

const SvgUploadArrow = ({ title, titleId, ...props }) => (
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
    <path d="M9 6v11h6V6h1l-4-3-4 3h1Z" stroke="#555770" strokeWidth={2} />
    <path d="M3 21h18" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgUploadArrow;
