import * as React from "react";

const SvgBurstMode = ({ title, titleId, ...props }) => (
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
      d="M10 17.9V6.1a.1.1 0 0 1 .1-.1h11.8a.1.1 0 0 1 .1.1v11.8a.1.1 0 0 1-.1.1H10.1a.1.1 0 0 1-.1-.1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M2 5v14M6 5v14" stroke="currentColor" strokeWidth={2} />
    <path
      d="m12 16 3.2-4 1.943 2.546.857-1.091L20 16h-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBurstMode;
