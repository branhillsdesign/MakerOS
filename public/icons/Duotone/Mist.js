import * as React from "react";

const SvgMist = ({ title, titleId, ...props }) => (
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
      d="M2 11.5c1.5 0 2.5 2 5.5 2s6-2.5 9-2.5 4 1.5 5.5 1.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M2 7c1.5 0 2.5 2 5.5 2s6-2.5 9-2.5S20.5 8 22 8M2 16c1.5 0 2.5 2 5.5 2s6-2.5 9-2.5 4 1.5 5.5 1.5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMist;
