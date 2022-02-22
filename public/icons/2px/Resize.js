import * as React from "react";

const SvgResize = ({ title, titleId, ...props }) => (
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
      d="M5 8V7H4v1h1Zm14 8v1h1v-1h-1ZM3 6h18V4H3v2Zm18 0v12h2V6h-2Zm0 12H3v2h18v-2ZM3 18V6H1v12h2Zm3-6V8H4v4h2ZM5 9h4V7H5v2Zm13 3v4h2v-4h-2Zm1 3h-4v2h4v-2ZM3 18H1a2 2 0 0 0 2 2v-2Zm18 0v2a2 2 0 0 0 2-2h-2Zm0-12h2a2 2 0 0 0-2-2v2ZM3 4a2 2 0 0 0-2 2h2V4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgResize;
