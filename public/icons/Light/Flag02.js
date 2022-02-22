import * as React from "react";

const SvgFlag02 = ({ title, titleId, ...props }) => (
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
      d="M4 3v-.6h-.6V3H4Zm16 12v.6h.6V15H20Zm0-10h.6v-.6H20V5Zm-8-2 .537-.268-.166-.332H12V3Zm1 2-.537.268.166.332H13V5Zm-1 8 .537-.268-.166-.332H12v.6Zm1 2-.537.268.166.332H13V15Zm-8.4 8V13H3.4v10h1.2Zm0-10V3H3.4v10h1.2Zm14.8-8v10h1.2V5h-1.2ZM4 3.6h8V2.4H4v1.2Zm7.463-.332 1 2 1.074-.536-1-2-1.074.536ZM13 5.6h7V4.4h-7v1.2Zm-1 6.8H4v1.2h8v-1.2Zm8 2h-7v1.2h7v-1.2Zm-6.463.332-1-2-1.074.536 1 2 1.074-.536Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFlag02;
