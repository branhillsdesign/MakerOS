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
      d="M5 15v-.6h-.6v.6H5Zm14.6 0v-4h-1.2v4h1.2Zm2.4 2.4h-3v1.2h3v-1.2Zm-10-8H7v1.2h5V9.4Zm-7 6.2h7v-1.2H5v1.2Zm6.4-5.6v5h1.2v-5h-1.2Zm6.6-.6h-6v1.2h6V9.4Zm-6 6.2h7v-1.2h-7v1.2ZM5.6 17v-.5H4.4v.5h1.2Zm0-.5V15H4.4v1.5h1.2ZM18.4 15v1.5h1.2V15h-1.2Zm0 1.5V18h1.2v-1.5h-1.2Zm1.2-5.5A1.6 1.6 0 0 0 18 9.4v1.2c.22 0 .4.18.4.4h1.2ZM6 17.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 18.6v-1.2Zm6.4 1.6a1.4 1.4 0 0 1-1.4 1.4v1.2a2.6 2.6 0 0 0 2.6-2.6h-1.2ZM11 20.4A1.4 1.4 0 0 1 9.6 19H8.4a2.6 2.6 0 0 0 2.6 2.6v-1.2ZM9.6 19a1.4 1.4 0 0 1 1.4-1.4v-1.2A2.6 2.6 0 0 0 8.4 19h1.2Zm1.4-1.4a1.4 1.4 0 0 1 1.4 1.4h1.2a2.6 2.6 0 0 0-2.6-2.6v1.2Zm8-.2h-6.268v1.2H19v-1.2Zm-9.75 0H6v1.2h3.25v-1.2ZM9 5.6h8V4.4H9v1.2ZM17 8V2l3 3-3 3ZM7 13V7l-3 3 3 3Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRvHookup;
