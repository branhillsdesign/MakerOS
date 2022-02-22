import * as React from "react";

const SvgMemory = ({ title, titleId, ...props }) => (
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
      d="M10 10V9H9v1h1Zm0 4H9v1h1v-1Zm4 0v1h1v-1h-1Zm0-4h1V9h-1v1Zm-5 0v4h2v-4H9Zm1 5h4v-2h-4v2Zm5-1v-4h-2v4h2Zm-1-5h-4v2h4V9Zm-4-4H7v2h3V5ZM9 3v3h2V3H9Zm8 2h-3v2h3V5Zm-3 0h-4v2h4V5Zm-1-2v3h2V3h-2Zm6 7V7h-2v3h2Zm2-1h-3v2h3V9Zm-2 8v-3h-2v3h2Zm0-3v-4h-2v4h2Zm2-1h-3v2h3v-2Zm-7 6h3v-2h-3v2Zm1 2v-3h-2v3h2Zm-8-2h3v-2H7v2Zm3 0h4v-2h-4v2Zm1 2v-3H9v3h2Zm-6-7v3h2v-3H5Zm-2 1h3v-2H3v2Zm2-8v3h2V7H5Zm0 3v4h2v-4H5Zm-2 1h3V9H3v2Zm14-4h2a2 2 0 0 0-2-2v2Zm0 10v2a2 2 0 0 0 2-2h-2ZM7 17H5a2 2 0 0 0 2 2v-2ZM7 5a2 2 0 0 0-2 2h2V5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMemory;
