import * as React from "react";

const SvgTravelSuitcase = ({ title, titleId, ...props }) => (
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
      d="M14 11h1v-1h-1v1Zm-1 0v-1h-.414l-.293.293L13 11Zm-2 2-.707-.707-.707.707.707.707L11 13Zm1 1-.707.707.707.707.707-.707L12 14Zm2-2 .707.707.293-.293V12h-1Zm6-2v8h2v-8h-2ZM4 18v-8H2v8h2Zm13-9h2V7h-2v2Zm2 10h-2v2h2v-2ZM16 8v12h2V8h-2ZM5 9h2V7H5v2Zm12 10H7v2h10v-2ZM7 19H5v2h2v-2ZM6 8v12h2V8H6Zm1 1h2V7H7v2Zm3-1V7H8v1h2Zm1-2h2V4h-2v2ZM9 9h6V7H9v2Zm6 0h2V7h-2v2Zm-1-2v1h2V7h-2Zm0 3h-1v2h1v-2Zm-1.707.293-2 2 1.414 1.414 2-2-1.414-1.414Zm-2 3.414 1 1 1.414-1.414-1-1-1.414 1.414Zm2.414 1 2-2-1.414-1.414-2 2 1.414 1.414ZM15 12v-1h-2v1h2Zm-2-6a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm-3 1a1 1 0 0 1 1-1V4a3 3 0 0 0-3 3h2ZM2 18a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H2Zm18 0a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm2-8a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2ZM4 10a1 1 0 0 1 1-1V7a3 3 0 0 0-3 3h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTravelSuitcase;
