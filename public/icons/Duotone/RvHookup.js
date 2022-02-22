import * as React from "react";

const SvgRvHookup = ({ title, titleId, ...props }) => (
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
      d="M19 15v-4a1 1 0 0 0-1-1h-5m6 5h-6m6 0v1.5m3 1.5h-3m0 0v-1.5m0 1.5h-6.268M12 10H7m5 0v5m0-5h1m-1 5H5v1.5m7-1.5h1m0-5v5m-8 1.5v.5a1 1 0 0 0 1 1h3.25M5 16.5h14M9 5h8"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M13 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M17 8V2l3 3-3 3ZM7 13V7l-3 3 3 3Z" fill="currentColor" />
  </svg>
);

export default SvgRvHookup;
