import * as React from "react";

const SvgItalic = ({ title, titleId, ...props }) => (
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
    <path d="m14 6-4 13" stroke="currentColor" strokeWidth={2} />
    <path d="M10 6h7.5m-11 13H14" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgItalic;
