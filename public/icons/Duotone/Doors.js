import * as React from "react";

const SvgDoors = ({ title, titleId, ...props }) => (
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
    <path d="M3 20h3m8-15h4v15h3" stroke="currentColor" strokeWidth={2} />
    <path d="M11 11v2m3 7H6V4h8v16Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgDoors;
