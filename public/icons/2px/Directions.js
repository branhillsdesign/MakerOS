import * as React from "react";

const SvgDirections = ({ title, titleId, ...props }) => (
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
      d="M8 2V1H7v1h1Zm0 5H7v1h1V7Zm10 0v1h.414l.293-.293L18 7Zm2.5-2.5.707.707.707-.707-.707-.707-.707.707ZM18 2l.707-.707L18.414 1H18v1Zm-2 8h1V9h-1v1Zm0 5v1h1v-1h-1ZM6 15l-.707.707.293.293H6v-1Zm-2.5-2.5-.707-.707-.707.707.707.707.707-.707ZM6 10V9h-.414l-.293.293L6 10Zm1-8v5h2V2H7Zm11.707 5.707 2.5-2.5-1.414-1.414-2.5 2.5 1.414 1.414Zm2.5-3.914-2.5-2.5-1.414 1.414 2.5 2.5 1.414-1.414ZM18 1H8v2h10V1Zm-3 9v5h2v-5h-2Zm-8.293 4.293-2.5-2.5-1.414 1.414 2.5 2.5 1.414-1.414Zm-2.5-1.086 2.5-2.5-1.414-1.414-2.5 2.5 1.414 1.414ZM8 8h4V6H8v2Zm4 0h6V6h-6v2Zm-6 3h6V9H6v2Zm6 0h4V9h-4v2Zm-1-4v3h2V7h-2Zm5 7h-4v2h4v-2Zm-4 0H6v2h6v-2Zm-1 1v9h2v-9h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDirections;
