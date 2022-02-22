import * as React from "react";

const SvgFridge = ({ title, titleId, ...props }) => (
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
      d="M6 22h12v-2H6v2ZM18 2H6v2h12V2ZM4 4v6h2V4H4Zm0 6v10h2V10H4Zm16 10V10h-2v10h2Zm0-10V4h-2v6h2ZM5 11h14V9H5v2Zm3-6v3h2V5H8Zm0 7v5h2v-5H8Zm10-8h2a2 2 0 0 0-2-2v2Zm0 18a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 2a2 2 0 0 0-2 2h2V2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFridge;
