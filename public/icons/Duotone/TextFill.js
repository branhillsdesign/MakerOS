import * as React from "react";

const SvgTextFill = ({ title, titleId, ...props }) => (
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
      d="M18 5.5h3V12H11v2m0 7v-7m0 7h-.5v-6.9a.1.1 0 0 1 .1-.1h.4m0 7h.5v-6.9a.1.1 0 0 0-.1-.1H11"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M4 3.1a.1.1 0 0 1 .1-.1h13.8a.1.1 0 0 1 .1.1v4.8a.1.1 0 0 1-.1.1H4.1a.1.1 0 0 1-.1-.1V3.1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTextFill;
