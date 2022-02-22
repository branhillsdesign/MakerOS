import * as React from "react";

const SvgPictureFrame = ({ title, titleId, ...props }) => (
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
      d="M8 6H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4M8 6l3.293-3.293a1 1 0 0 1 1.414 0L16 6M8 6h8"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m5 17 5.6-7 3.4 4.454 1.5-1.909L19 17H5Z" fill="currentColor" />
  </svg>
);

export default SvgPictureFrame;
