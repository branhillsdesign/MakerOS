import * as React from "react";

const SvgArrowBottomRight = ({ title, titleId, ...props }) => (
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
    <path d="M4 20 18 6" stroke="currentColor" strokeWidth={2} />
    <path d="M20 9V4h-5l5 5Z" fill="#555770" />
  </svg>
);

export default SvgArrowBottomRight;
