import * as React from "react";

const SvgCameraVintage = ({ title, titleId, ...props }) => (
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
      d="M5 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7M5 5V4h2v1M5 5h2m13 3h-2"
      stroke="#555770"
      strokeWidth={2}
    />
    <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgCameraVintage;
