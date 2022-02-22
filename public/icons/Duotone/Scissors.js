import * as React from "react";

const SvgScissors = ({ title, titleId, ...props }) => (
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
      d="M9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.293 7.707 12.586 12l-4.293 4.293 1.414 1.414 5-5 .707-.707-.707-.707-5-5-1.414 1.414Zm5.957 5.043a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m22 6-4.586 4.586L16 12l1.414 1.414L22 18l1 1v1h-3l-7-7v-2l7-7h3v1l-1 1Zm-7.75 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgScissors;
