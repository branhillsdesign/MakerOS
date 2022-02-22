import * as React from "react";

const SvgRv = ({ title, titleId, ...props }) => (
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
      d="M18 12V8a1 1 0 0 0-1-1h-5m6 5h-6m6 0v1.5m3 1.5h-3m0 0v-1.5m0 1.5h-6.268M11 7H5a1 1 0 0 0-1 1v4m7-5v5m0-5h1m-8 5h7m-7 0v1.5m7-1.5h1m0-5v5m-8 1.5v.5a1 1 0 0 0 1 1h3.25M4 13.5h14"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRv;
