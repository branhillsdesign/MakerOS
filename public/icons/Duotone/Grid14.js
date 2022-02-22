import * as React from "react";

const SvgGrid14 = ({ title, titleId, ...props }) => (
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
      d="M3 2v2.9a.1.1 0 0 0 .1.1h17.8a.1.1 0 0 0 .1-.1V2M3 22v-2.9a.1.1 0 0 1 .1-.1h17.8a.1.1 0 0 1 .1.1V22"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M3 15V9h18v6H3Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgGrid14;
