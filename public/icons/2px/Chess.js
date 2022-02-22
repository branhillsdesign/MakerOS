import * as React from "react";

const SvgChess = ({ title, titleId, ...props }) => (
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
      d="M1 1H0V0h1v1Zm0 22v1H0v-1h1Zm22 0h1v1h-1v-1Zm0-22V0h1v1h-1Zm-1 3h-4V2h4v2Zm-4 4h-4V6h4v2Zm-4-4h-4V2h4v2Zm-4 0h4v2h-4V4Zm0 4H6V6h4v2ZM6 6H2V4h4v2Zm16 6h-4v-2h4v2Zm-4 0h4v2h-4v-2Zm0 4h-4v-2h4v2Zm-4-4h-4v-2h4v2Zm0 2h-4v-2h4v2Zm-8 0H2v-2h4v2Zm12-4h-4V8h4v2Zm-8 0H6V8h4v2ZM6 4H2V2h4v2Zm0 8H2v-2h4v2Zm16 8h-4v-2h4v2Zm-8 0h-4v-2h4v2Zm4-2h-4v-2h4v2Zm-8 0H6v-2h4v2Zm-4 2H2v-2h4v2Zm0 2H2v-2h4v2Zm0-8h4v2H6v-2Zm4 6h4v2h-4v-2Zm8 0h4v2h-4v-2Zm0-16h4v2h-4V4ZM2 1v22H0V1h2ZM1 22h22v2H1v-2Zm21 1V1h2v22h-2Zm1-21H1V0h22v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgChess;
