import * as React from "react";

const SvgTabletImage = ({ title, titleId, ...props }) => (
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
      d="M21 6v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m5 16 5.6-7 3.4 4.454 1.5-1.909L19 16H5Z" fill="currentColor" />
  </svg>
);

export default SvgTabletImage;
