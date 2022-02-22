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
    <path
      d="M3 20h3m0 0h8V5M6 20V4h8v1m-3 6v2m3-8h4v15h3"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgDoors;
