import * as React from "react";

const SvgSunbed = ({ title, titleId, ...props }) => (
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
    <path d="m3 17 4-4h11l4 4" stroke="currentColor" strokeWidth={2} />
    <path
      d="M7 13 2.604 8.604a.354.354 0 0 1 .5-.5L7 12h14.5a.5.5 0 0 1 0 1H7Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSunbed;
