import * as React from "react";

const SvgTurnLeftSign = ({ title, titleId, ...props }) => (
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
      d="m2.707 12.707 8.586 8.586a1 1 0 0 0 1.414 0l8.586-8.586a1 1 0 0 0 0-1.414l-8.586-8.586a1 1 0 0 0-1.414 0l-8.586 8.586a1 1 0 0 0 0 1.414Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M10 7.7 6.7 11l3.3 3.3V7.7Z" fill="currentColor" />
    <path d="M9 11h5a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgTurnLeftSign;
