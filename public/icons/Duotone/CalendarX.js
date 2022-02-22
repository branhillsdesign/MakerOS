import * as React from "react";

const SvgCalendarX = ({ title, titleId, ...props }) => (
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
      d="m12 15-3.5-3.5M12 15l3.5-3.5M12 15l3.5 3.5M12 15l-3.5 3.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M3 8.95h18V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.95Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7 4H4a1 1 0 0 0-1 1v3.95h18V5a1 1 0 0 0-1-1h-3M7 4V1m0 3h10m0 0V1"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCalendarX;
