import * as React from "react";

const SvgPiano = ({ title, titleId, ...props }) => (
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
      d="M6 12V6h4m0 0v6m0-6h4m0 0v6m0-6h4v6"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M22 7v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPiano;
