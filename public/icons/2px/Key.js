import * as React from "react";

const SvgKey = ({ title, titleId, ...props }) => (
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
      d="m12.659 10-.943.333a1 1 0 0 0 .943.667v-1ZM23 10h1a1 1 0 0 0-1-1v1Zm0 4v1a1 1 0 0 0 1-1h-1Zm-10.341 0v-1a1 1 0 0 0-.943.667l.943.333ZM21 14v-1a1 1 0 0 0-1 1h1Zm0 4v1a1 1 0 0 0 1-1h-1Zm-4 0h-1a1 1 0 0 0 1 1v-1Zm0-4h1a1 1 0 0 0-1-1v1Zm-9-2a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3H8Zm-1 1a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm0 6a5 5 0 0 1-5-5H0a7 7 0 0 0 7 7v-2Zm-5-5a5 5 0 0 1 5-5V5a7 7 0 0 0-7 7h2Zm5-5a5.002 5.002 0 0 1 4.716 3.333l1.885-.666A7.002 7.002 0 0 0 7 5v2Zm5.659 4H23V9H12.659v2ZM22 10v4h2v-4h-2Zm-10.284 3.667A5.002 5.002 0 0 1 7 17v2c3.05 0 5.641-1.95 6.601-4.667l-1.885-.666ZM23 13h-2v2h2v-2Zm-3 1v4h2v-4h-2Zm1 3h-4v2h4v-2Zm-4-4h-4.341v2H17v-2Zm1 5v-4h-2v4h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgKey;
