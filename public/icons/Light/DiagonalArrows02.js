import * as React from "react";

const SvgDiagonalArrows02 = ({ title, titleId, ...props }) => (
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
    <path d="M15 16v5h-5l5-5Z" fill="#555770" />
    <path d="m5 11 8 8" stroke="#555770" strokeWidth={1.2} />
    <path d="M9 8V3h5L9 8Z" fill="#555770" />
    <path d="m19 13-8-8" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgDiagonalArrows02;
