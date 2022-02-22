import * as React from "react";

const SvgImage = ({ title, titleId, ...props }) => (
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
      d="m3 17 7.2-9 4.371 5.727L12 17H3Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M16.5 11.273 21 17h-9l2.571-3.273 1.929-2.454Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgImage;
