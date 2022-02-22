import * as React from "react";

const SvgMailClosed = ({ title, titleId, ...props }) => (
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
    <path d="m2 8 10 6 10-6" stroke="currentColor" strokeWidth={2} />
    <path
      d="M2 8a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMailClosed;
