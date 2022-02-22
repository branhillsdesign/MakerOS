import * as React from "react";

const SvgCameraRoll = ({ title, titleId, ...props }) => (
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
      d="M19 10h-2m-2 0h-2m-2 0H9m0 7h2m2 0h2m2 0h2"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 22H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3.1a.1.1 0 0 1 .1-.1h3.8a.1.1 0 0 1 .1.1V5h2a1 1 0 0 1 1 1v1h8v13h-8v1a1 1 0 0 1-1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCameraRoll;
