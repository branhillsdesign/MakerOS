import * as React from "react";

const SvgCollapse = ({ title, titleId, ...props }) => (
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
      d="M14.25 21v-6.75H21M3 9.75h6.75V3"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M14.25 3v6.75H21m-18 4.5h6.75V21"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCollapse;
