import * as React from "react";

const SvgDragLines = ({ title, titleId, ...props }) => (
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
    <path d="M4 10h16m0 4H4" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgDragLines;
