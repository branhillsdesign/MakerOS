import * as React from "react";

const SvgSmallArrowsJoining = ({ title, titleId, ...props }) => (
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
    <path d="m8 4 4 4 4-4" stroke="currentColor" strokeWidth={2} />
    <path d="m8 20 4-4 4 4" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgSmallArrowsJoining;
