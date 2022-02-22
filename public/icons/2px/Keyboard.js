import * as React from "react";

const SvgKeyboard = ({ title, titleId, ...props }) => (
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
      d="M22 17V7h-2v10h2ZM20 5H4v2h16V5ZM4 19h16v-2H4v2ZM2 7v10h2V7H2Zm6 9h8v-2H8v2Zm-3-6h2V8H5v2Zm0 3h2v-2H5v2Zm3 0h2v-2H8v2Zm0-3h2V8H8v2Zm3 0h2V8h-2v2Zm0 3h2v-2h-2v2Zm3-3h2V8h-2v2Zm0 3h2v-2h-2v2Zm3-3h2V8h-2v2Zm0 3h2v-2h-2v2ZM4 5a2 2 0 0 0-2 2h2V5Zm18 2a2 2 0 0 0-2-2v2h2Zm-2 10v2a2 2 0 0 0 2-2h-2ZM4 17H2a2 2 0 0 0 2 2v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgKeyboard;
