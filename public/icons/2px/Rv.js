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
      d="M19 12V8h-2v4h2Zm2 2h-3v2h3v-2ZM11 6H5v2h6V6Zm-7 7h7v-2H4v2Zm6-6v5h2V7h-2Zm7-1h-5v2h5V6Zm-5 0h-1v2h1V6Zm-1 7h1v-2h-1v2Zm1 0h6v-2h-6v2Zm-1-6v5h2V7h-2Zm-6 7v-.5H3v.5h2Zm0-.5V12H3v1.5h2ZM17 12v1.5h2V12h-2Zm0 1.5V15h2v-1.5h-2Zm-13 1h14v-2H4v2ZM19 8a2 2 0 0 0-2-2v2h2ZM5 14H3a2 2 0 0 0 2 2v-2Zm6 2a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H7a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm8-1h-6.268v2H18v-2Zm-9.75 0H5v2h3.25v-2ZM5 12V8H3v4h2Zm0-6a2 2 0 0 0-2 2h2V6Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRv;
