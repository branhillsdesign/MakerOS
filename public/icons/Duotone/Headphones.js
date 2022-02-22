import * as React from "react";

const SvgHeadphones = ({ title, titleId, ...props }) => (
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
    <path d="M4 13a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth={2} />
    <path
      d="M2 14h2v4H2v-4Zm18 0h2v4h-2v-4Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeadphones;
