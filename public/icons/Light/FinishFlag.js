import * as React from "react";

const SvgFinishFlag = ({ title, titleId, ...props }) => (
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
      d="M22 5h-2V3h2v2Zm-2 2h-2V5h2v2Zm-2-2h-2V3h2v2Zm0 4h-2V7h2v2Zm4 0h-2V7h2v2Zm-8-4h-2V3h2v2Zm-2 2h-2V5h2v2Zm-2-2H8V3h2v2Zm0 4H8V7h2v2Zm4 0h-2V7h2v2Zm2-2h-2V5h2v2ZM8 7H6V5h2v2Zm14 6h-2v-2h2v2Zm-2 2h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm0 4h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-4h-2v-2h2v2Zm-2 2h-2v-2h2v2Zm-2-2H8v-2h2v2Zm0 4H8v-2h2v2Zm4 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-8 0H6v-2h2v2Zm12-4h-2V9h2v2Zm-4 0h-2V9h2v2Zm-4 0h-2V9h2v2Zm-4 0H6V9h2v2ZM6 5H4V3h2v2Zm0 4H4V7h2v2Zm0 4H4v-2h2v2Zm0 4H4v-2h2v2ZM4 2v22H2V2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFinishFlag;
