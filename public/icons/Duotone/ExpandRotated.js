import * as React from "react";

const SvgExpandRotated = ({ title, titleId, ...props }) => (
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
      d="M17.625 8.625 21 12l-3.375 3.375m-11.25-6.75L3 12l3.375 3.375"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8.625 17.625 12 21l3.375-3.375m-6.75-11.25L12 3l3.375 3.375"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgExpandRotated;
