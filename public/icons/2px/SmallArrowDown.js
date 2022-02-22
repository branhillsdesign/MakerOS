import * as React from "react";

const SvgSmallArrowDown = ({ title, titleId, ...props }) => (
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
    <path d="m7 10.5 5 5 5-5H7Z" fill="#555770" />
  </svg>
);

export default SvgSmallArrowDown;
