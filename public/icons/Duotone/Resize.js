import * as React from "react";

const SvgResize = ({ title, titleId, ...props }) => (
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
      d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M5 12V8h4m10 4v4h-4" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgResize;
