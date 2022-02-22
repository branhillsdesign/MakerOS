import * as React from "react";

const SvgCalculator = ({ title, titleId, ...props }) => (
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
      d="m20 14-3 3m0 0-3 3m3-3-3-3m3 3 3 3"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M3 17h8" stroke="currentColor" strokeWidth={2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="currentColor"
    />
    <path d="M13 7h8" stroke="currentColor" strokeWidth={2} />
    <path d="M7 3v8M3 7h8" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgCalculator;
