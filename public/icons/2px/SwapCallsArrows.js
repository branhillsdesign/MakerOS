import * as React from "react";

const SvgSwapCallsArrows = ({ title, titleId, ...props }) => (
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
      d="m7.5 16 .707.707L9.914 15H7.5v1ZM6 17.5l-.707.707.707.707.707-.707L6 17.5ZM4.5 16v-1H2.086l1.707 1.707L4.5 16ZM18 5.5l.707-.707L18 4.086l-.707.707L18 5.5ZM16.5 7l-.707-.707L14.086 8H16.5V7Zm3 0v1h2.414l-1.707-1.707L19.5 7ZM6.793 15.293l-1.5 1.5 1.414 1.414 1.5-1.5-1.414-1.414Zm-.086 1.5-1.5-1.5-1.414 1.414 1.5 1.5 1.414-1.414ZM4.5 17H6v-2H4.5v2ZM6 17h1.5v-2H6v2Zm1-1V8H5v8h2Zm4-8v7h2V8h-2Zm6.293-3.207-1.5 1.5 1.414 1.414 1.5-1.5-1.414-1.414Zm2.914 1.5-1.5-1.5-1.414 1.414 1.5 1.5 1.414-1.414ZM16.5 8H18V6h-1.5v2ZM18 8h1.5V6H18v2Zm-1-1v8h2V7h-2Zm-2 12a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2v2Zm-4-4a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2h-2ZM9 6a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2ZM7 8a2 2 0 0 1 2-2V4a4 4 0 0 0-4 4h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSwapCallsArrows;
