import * as React from "react";

const SvgLight = ({ title, titleId, ...props }) => (
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
      d="M20 7.872A8.96 8.96 0 0 1 21 12a8.96 8.96 0 0 1-1 4.128V7.872ZM12 3v18a9 9 0 1 1 0-18Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLight;
