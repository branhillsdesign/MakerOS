import * as React from "react";

const SvgDiagonalArrows6 = ({ title, titleId, ...props }) => (
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
    <path d="m19 11-8 8M5 13l8-8" stroke="currentColor" strokeWidth={2} />
    <path d="M9 16v5h5l-5-5ZM15 8V3h-5l5 5Z" fill="#555770" />
  </svg>
);

export default SvgDiagonalArrows6;
