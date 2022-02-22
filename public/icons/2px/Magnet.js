import * as React from "react";

const SvgMagnet = ({ title, titleId, ...props }) => (
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
      d="M6 5H5v1h1V5Zm0-1V3H5v1h1Zm12 1v1h1V5h-1Zm0-1h1V3h-1v1ZM7 5v1h1V5H7Zm0-1h1V3H7v1Zm10 1h-1v1h1V5Zm0-1V3h-1v1h1Zm0 4.5v-1h-1v1h1Zm1 0h1v-1h-1v1Zm-12 0v-1H5v1h1Zm1 0h1v-1H7v1ZM17 14a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7h-2Zm-5 5a5 5 0 0 1-5-5H5a7 7 0 0 0 7 7v-2ZM7 5V4H5v1h2Zm12 0V4h-2v1h2Zm-3 8.706C16 16.132 14.156 18 12 18v2c3.367 0 6-2.873 6-6.294h-2ZM12 18c-2.156 0-4-1.868-4-4.294H6C6 17.127 8.633 20 12 20v-2ZM8 5V4H6v1h2Zm10 0V4h-2v1h2ZM7 4H6v2h1V4ZM6 5h1V3H6v2Zm12-1h-1v2h1V4Zm-1 1h1V3h-1v2Zm1 8.706V8.5h-2v5.206h2ZM19 14V8.5h-2V14h2Zm-2-4.5h1v-2h-1v2ZM7 14V8.5H5V14h2Zm1-.294V8.5H6v5.206h2ZM6 9.5h1v-2H6v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMagnet;
