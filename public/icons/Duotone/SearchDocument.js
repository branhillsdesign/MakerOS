import * as React from "react";

const SvgSearchDocument = ({ title, titleId, ...props }) => (
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
      d="M19 8h1a1 1 0 0 0-.293-.707L19 8Zm-5-5 .707-.707A1 1 0 0 0 14 2v1Zm0 5h-1v1h1V8ZM4 4v16h2V4H4Zm10-2H6v2h8V2Zm5.707 5.293-5-5-1.414 1.414 5 5 1.414-1.414ZM13 3v5h2V3h-2Zm1 6h5V7h-5v2Zm6 1.5V8h-2v2.5h2ZM6 22h4v-2H6v2Zm-2-2a2 2 0 0 0 2 2v-2H4ZM6 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
    <path
      d="M17.885 18.885 22 23m-2.933-6.967a4.033 4.033 0 1 1-8.067 0 4.033 4.033 0 0 1 8.067 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSearchDocument;
