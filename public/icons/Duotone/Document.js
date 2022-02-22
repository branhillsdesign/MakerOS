import * as React from "react";

const SvgDocument = ({ title, titleId, ...props }) => (
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
      d="m14 3 5 5h-5V3Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M19 8h1a1 1 0 0 0-.293-.707L19 8Zm-5-5 .707-.707A1 1 0 0 0 14 2v1Zm5 17h1-1ZM6 22h12v-2H6v2ZM4 4v16h2V4H4Zm16 16V8h-2v12h2ZM14 2H6v2h8V2Zm-.707 1.707 5 5 1.414-1.414-5-5-1.414 1.414ZM18 22a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDocument;
