import * as React from "react";

const SvgGlobe = ({ title, titleId, ...props }) => (
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
      d="M20 12a12.806 12.806 0 0 1-16 0 12.806 12.806 0 0 1 16 0Zm-8 8a12.806 12.806 0 0 0 0-16 12.806 12.806 0 0 0 0 16Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGlobe;
