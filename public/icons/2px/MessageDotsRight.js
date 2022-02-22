import * as React from "react";

const SvgMessageDotsRight = ({ title, titleId, ...props }) => (
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
      d="m20 14-.707-.707-.293.293V14h1Zm2-2 .707.707.707-.707-.707-.707L22 12Zm-2-2h-1v.414l.293.293L20 10Zm-1-6H4v2h15V4ZM4 20h15v-2H4v2ZM2 6v12h2V6H2Zm19 12v-4h-2v4h2Zm-.293-3.293 2-2-1.414-1.414-2 2 1.414 1.414Zm2-3.414-2-2-1.414 1.414 2 2 1.414-1.414ZM21 10V6h-2v4h2ZM4 4a2 2 0 0 0-2 2h2V4Zm15 2h2a2 2 0 0 0-2-2v2Zm0 14a2 2 0 0 0 2-2h-2v2ZM4 18H2a2 2 0 0 0 2 2v-2ZM13 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMessageDotsRight;
