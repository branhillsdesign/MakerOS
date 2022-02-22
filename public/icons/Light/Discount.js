import * as React from "react";

const SvgDiscount = ({ title, titleId, ...props }) => (
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
      d="M17 7 7 17m15-5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M9.9 8.5a1.4 1.4 0 0 1-1.4 1.4v1.2a2.6 2.6 0 0 0 2.6-2.6H9.9ZM8.5 9.9a1.4 1.4 0 0 1-1.4-1.4H5.9a2.6 2.6 0 0 0 2.6 2.6V9.9ZM7.1 8.5a1.4 1.4 0 0 1 1.4-1.4V5.9a2.6 2.6 0 0 0-2.6 2.6h1.2Zm1.4-1.4a1.4 1.4 0 0 1 1.4 1.4h1.2a2.6 2.6 0 0 0-2.6-2.6v1.2Zm8.4 8.4a1.4 1.4 0 0 1-1.4 1.4v1.2a2.6 2.6 0 0 0 2.6-2.6h-1.2Zm-1.4 1.4a1.4 1.4 0 0 1-1.4-1.4h-1.2a2.6 2.6 0 0 0 2.6 2.6v-1.2Zm-1.4-1.4a1.4 1.4 0 0 1 1.4-1.4v-1.2a2.6 2.6 0 0 0-2.6 2.6h1.2Zm1.4-1.4a1.4 1.4 0 0 1 1.4 1.4h1.2a2.6 2.6 0 0 0-2.6-2.6v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDiscount;
