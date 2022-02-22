import * as React from "react";

const SvgTea = ({ title, titleId, ...props }) => (
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
    <path d="M12 4v3m0 0h-1v2h2V7h-1Z" stroke="currentColor" strokeWidth={2} />
    <path
      d="M17 9h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3m0 5V4m0 5v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4h12"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M4 20h16" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgTea;
