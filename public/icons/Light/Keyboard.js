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
      d="M21.6 17V7h-1.2v10h1.2ZM20 5.4H4v1.2h16V5.4ZM4 18.6h16v-1.2H4v1.2ZM2.4 7v10h1.2V7H2.4ZM8 15.6h8v-1.2H8v1.2Zm-3-6h2V8.4H5v1.2Zm0 3h2v-1.2H5v1.2Zm3 0h2v-1.2H8v1.2Zm0-3h2V8.4H8v1.2Zm3 0h2V8.4h-2v1.2Zm0 3h2v-1.2h-2v1.2Zm3-3h2V8.4h-2v1.2Zm0 3h2v-1.2h-2v1.2Zm3-3h2V8.4h-2v1.2Zm0 3h2v-1.2h-2v1.2ZM4 5.4A1.6 1.6 0 0 0 2.4 7h1.2c0-.22.18-.4.4-.4V5.4ZM21.6 7A1.6 1.6 0 0 0 20 5.4v1.2c.22 0 .4.18.4.4h1.2Zm-1.2 10a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2ZM4 17.4a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 18.6v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgKeyboard;
