import * as React from "react";

const SvgIndentTextLeft = ({ title, titleId, ...props }) => (
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
      d="M8 16V8l-4 4 4 4ZM4 7h16V5H4v2Zm6 4h10V9H10v2Zm0 4h10v-2H10v2Zm-6 4h16v-2H4v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgIndentTextLeft;
