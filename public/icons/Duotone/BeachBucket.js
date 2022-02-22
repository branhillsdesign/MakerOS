import * as React from "react";

const SvgBeachBucket = ({ title, titleId, ...props }) => (
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
      d="M4 9H3V6h12.768A2 2 0 0 0 17.5 7M4 9l1 12h9v-3a3.5 3.5 0 0 1 3.5-3.5V9M4 9h13.5m0-2a2 2 0 0 0 2-2m-2 2v2"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M17.5 14.5A3.5 3.5 0 0 0 14 18v4h.5v-.5h6v.5h.5v-4a3.5 3.5 0 0 0-3.5-3.5Zm0 0V7m0 0a2 2 0 0 0 2-2V2.5h-4V5a2 2 0 0 0 2 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBeachBucket;
