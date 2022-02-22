import * as React from "react";

const SvgTurnRightSign = ({ title, titleId, ...props }) => (
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
      d="m21.293 12.707-8.586 8.586a1 1 0 0 1-1.414 0l-8.586-8.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586a1 1 0 0 1 0 1.414Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m14 7.7 3.3 3.3-3.3 3.3V7.7Z" fill="currentColor" />
    <path d="M15 11h-5a1 1 0 0 0-1 1v3" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgTurnRightSign;
