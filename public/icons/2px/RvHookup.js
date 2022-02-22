import * as React from "react";

const SvgRvHookup = ({ title, titleId, ...props }) => (
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
      d="M5 15v-1H4v1h1Zm15 0v-4h-2v4h2Zm2 2h-3v2h3v-2ZM12 9H7v2h5V9Zm-7 7h7v-2H5v2Zm6-6v5h2v-5h-2Zm7-1h-5v2h5V9Zm-5 0h-1v2h1V9Zm-1 7h1v-2h-1v2Zm1 0h6v-2h-6v2Zm-1-6v5h2v-5h-2Zm-6 7v-.5H4v.5h2Zm0-.5V15H4v1.5h2ZM18 15v1.5h2V15h-2Zm0 1.5V18h2v-1.5h-2Zm-13 1h14v-2H5v2ZM20 11a2 2 0 0 0-2-2v2h2ZM6 17H4a2 2 0 0 0 2 2v-2Zm6 2a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H8a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm8-1h-6.268v2H19v-2Zm-9.75 0H6v2h3.25v-2ZM9 6h8V4H9v2ZM17 8V2l3 3-3 3ZM7 13V7l-3 3 3 3Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRvHookup;
