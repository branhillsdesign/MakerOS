import * as React from "react";

const SvgTravelSuitcase = ({ title, titleId, ...props }) => (
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
      d="M17 8v12M7 8v12m7-9h-1l-2 2 1 1 2-2v-1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9 8H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4M9 8V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M9 8h6"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTravelSuitcase;
