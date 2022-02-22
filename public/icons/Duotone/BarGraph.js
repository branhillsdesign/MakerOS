import * as React from "react";

const SvgBarGraph = ({ title, titleId, ...props }) => (
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
      d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M6 17V8m4 9v-7m4 7v-3m4 3V8"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBarGraph;
