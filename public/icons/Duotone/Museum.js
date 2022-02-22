import * as React from "react";

const SvgMuseum = ({ title, titleId, ...props }) => (
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
      d="M2 21h3m17 0h-3M5 21h14M5 21V10m14 11V10M5 10V8h14v2M5 10H3V9l4.5-3M19 10h2V9l-4.5-3m-9 0h9m-9 0 3-2m6 2-3-2m-3 0L12 3l1.5 1m-3 0h3"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M15 18v-6.5h-.5l-2.5 4-2.5-4H9V18"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMuseum;
