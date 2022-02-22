import * as React from "react";

const SvgRv = ({ title, titleId, ...props }) => (
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
      d="M18.6 12V8h-1.2v4h1.2Zm2.4 2.4h-3v1.2h3v-1.2Zm-10-8H5v1.2h6V6.4Zm-7 6.2h7v-1.2H4v1.2ZM10.4 7v5h1.2V7h-1.2Zm6.6-.6h-6v1.2h6V6.4Zm-6 6.2h7v-1.2h-7v1.2ZM4.6 14v-.5H3.4v.5h1.2Zm0-.5V12H3.4v1.5h1.2ZM17.4 12v1.5h1.2V12h-1.2Zm0 1.5V15h1.2v-1.5h-1.2ZM18.6 8A1.6 1.6 0 0 0 17 6.4v1.2c.22 0 .4.18.4.4h1.2ZM5 14.4a.4.4 0 0 1-.4-.4H3.4A1.6 1.6 0 0 0 5 15.6v-1.2Zm6.4 1.6a1.4 1.4 0 0 1-1.4 1.4v1.2a2.6 2.6 0 0 0 2.6-2.6h-1.2ZM10 17.4A1.4 1.4 0 0 1 8.6 16H7.4a2.6 2.6 0 0 0 2.6 2.6v-1.2ZM8.6 16a1.4 1.4 0 0 1 1.4-1.4v-1.2A2.6 2.6 0 0 0 7.4 16h1.2Zm1.4-1.4a1.4 1.4 0 0 1 1.4 1.4h1.2a2.6 2.6 0 0 0-2.6-2.6v1.2Zm8-.2h-6.268v1.2H18v-1.2Zm-9.75 0H5v1.2h3.25v-1.2ZM4.6 12V8H3.4v4h1.2ZM5 6.4A1.6 1.6 0 0 0 3.4 8h1.2c0-.22.18-.4.4-.4V6.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRv;
