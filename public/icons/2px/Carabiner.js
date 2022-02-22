import * as React from "react";

const SvgCarabiner = ({ title, titleId, ...props }) => (
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
      d="M17 8v8h2V8h-2Zm-5 13a5 5 0 0 1-5-5H5a7 7 0 0 0 7 7v-2Zm5-5a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7h-2ZM12 3a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm0-2a7 7 0 0 0-7 7h2a5 5 0 0 1 5-5V1ZM7 9V8H5v1h2Zm-1 4h.9v-2H6v2Zm0-.9v2.8h2v-2.8H6ZM7 16v-1H5v1h2Zm0-1v-3H5v3h2Zm-.1-1H6v2h.9v-2ZM6 14h-.9v2H6v-2Zm0 .9v-2.8H4v2.8h2ZM5.1 13H6v-2h-.9v2Zm.9-.9a.9.9 0 0 1-.9.9v-2A1.1 1.1 0 0 0 4 12.1h2ZM5.1 14a.9.9 0 0 1 .9.9H4A1.1 1.1 0 0 0 5.1 16v-2Zm.9.9a.9.9 0 0 1 .9-.9v2A1.1 1.1 0 0 0 8 14.9H6Zm.9-1.9a.9.9 0 0 1-.9-.9h2A1.1 1.1 0 0 0 6.9 11v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCarabiner;
