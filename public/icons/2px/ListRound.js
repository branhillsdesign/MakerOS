import * as React from "react";

const SvgListRound = ({ title, titleId, ...props }) => (
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
    <mask id="List_Round_svg__a" fill="#fff">
      <path d="M2 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM2 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM8 5a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H10a2 2 0 0 1-2-2ZM8 12a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H10a2 2 0 0 1-2-2ZM8 19a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H10a2 2 0 0 1-2-2Z" />
    </mask>
    <path
      d="M10 5h10V1H10v4Zm10 0H10v4h10V5Zm-10 7h10V8H10v4Zm10 0H10v4h10v-4Zm-10 7h10v-4H10v4Zm10 0H10v4h10v-4Zm-10 0H6a4 4 0 0 0 4 4v-4Zm10 0v4a4 4 0 0 0 4-4h-4Zm0 0h4a4 4 0 0 0-4-4v4Zm-10-4a4 4 0 0 0-4 4h4v-4Zm0-3H6a4 4 0 0 0 4 4v-4Zm10 0v4a4 4 0 0 0 4-4h-4Zm0 0h4a4 4 0 0 0-4-4v4ZM10 8a4 4 0 0 0-4 4h4V8Zm0-3H6a4 4 0 0 0 4 4V5Zm10 0v4a4 4 0 0 0 4-4h-4Zm0 0h4a4 4 0 0 0-4-4v4ZM10 1a4 4 0 0 0-4 4h4V1ZM4 19H0a4 4 0 0 0 4 4v-4Zm0 0v4a4 4 0 0 0 4-4H4Zm0 0h4a4 4 0 0 0-4-4v4Zm0-4a4 4 0 0 0-4 4h4v-4Zm0-3H0a4 4 0 0 0 4 4v-4Zm0 0v4a4 4 0 0 0 4-4H4Zm0 0h4a4 4 0 0 0-4-4v4Zm0-4a4 4 0 0 0-4 4h4V8Zm0-3H0a4 4 0 0 0 4 4V5Zm0 0v4a4 4 0 0 0 4-4H4Zm0 0h4a4 4 0 0 0-4-4v4Zm0-4a4 4 0 0 0-4 4h4V1Z"
      fill="#555770"
      mask="url(#List_Round_svg__a)"
    />
  </svg>
);

export default SvgListRound;
