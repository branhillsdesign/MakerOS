import * as React from "react";

const SvgTabletLocked = ({ title, titleId, ...props }) => (
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
    <path
      d="M14.25 12v-1.75a2.25 2.25 0 0 0-4.5 0V12m4.5 0h-4.5m4.5 0h.65a.1.1 0 0 1 .1.1V15a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.9a.1.1 0 0 1 .1-.1h.65"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTabletLocked;
