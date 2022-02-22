import * as React from "react";

const SvgInboxIncoming = ({ title, titleId, ...props }) => (
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
      d="M15 14c0 .35-.06.687-.17 1m0 0a3.001 3.001 0 0 1-5.66 0m5.66 0H20M9.17 15c-.11-.313-.17-.65-.17-1m.17 1H4M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="m12 12-.707.707.707.707.707-.707L12 12Zm1-1 .707.707L15.414 10H13v1Zm-2 0v-1H8.586l1.707 1.707L11 11Zm2 1V6h-2v6h2Zm-.293.707 1-1-1.414-1.414-1 1 1.414 1.414ZM13 10h-2v2h2v-2Zm-2.707 1.707 1 1 1.414-1.414-1-1-1.414 1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInboxIncoming;
