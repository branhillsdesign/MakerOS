import * as React from "react";

const SvgBed = ({ title, titleId, ...props }) => (
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
      d="M19 8a3 3 0 0 1 3 3v5H12V8h7ZM7 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M2 5v11m0 0v4m0-4h20v4" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgBed;
