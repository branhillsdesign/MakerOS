import * as React from "react";

const SvgHeartMonitor = ({ title, titleId, ...props }) => (
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
      d="M4.75 2C3.231 2 2 3.185 2 4.647c0 .596.042 1.32.746 2.11C3.451 7.55 7.5 11 7.5 11s4.05-3.45 4.754-4.242c.705-.791.746-1.515.746-2.111C13 3.185 11.769 2 10.25 2S7.5 3.185 7.5 4.647C7.5 3.185 6.269 2 4.75 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m1 22 7.293-7.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0L22 9m0 0h-4m4 0v4"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeartMonitor;
