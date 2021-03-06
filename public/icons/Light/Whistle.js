import * as React from "react";

const SvgWhistle = ({ title, titleId, ...props }) => (
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
      d="M21 7h.6v-.6H21V7Zm0 3v.6h.6V10H21ZM5.4 8.5a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1H5.4Zm-.9.9a.9.9 0 0 1-.9-.9H2.4c0 1.16.94 2.1 2.1 2.1V9.4Zm-.9-.9a.9.9 0 0 1 .9-.9V6.4a2.1 2.1 0 0 0-2.1 2.1h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2ZM15.4 12a4.4 4.4 0 0 1-4.4 4.4v1.2a5.6 5.6 0 0 0 5.6-5.6h-1.2ZM11 16.4A4.4 4.4 0 0 1 6.6 12H5.4a5.6 5.6 0 0 0 5.6 5.6v-1.2ZM6.6 12A4.4 4.4 0 0 1 11 7.6V6.4A5.6 5.6 0 0 0 5.4 12h1.2ZM11 7.6h10V6.4H11v1.2Zm9.4-.6v3h1.2V7h-1.2Zm.6 2.4h-2.5v1.2H21V9.4ZM16.6 12c0-.41.166-.74.463-.978.308-.247.79-.422 1.437-.422V9.4c-.854 0-1.62.23-2.188.687A2.404 2.404 0 0 0 15.4 12h1.2Zm-4.7 0a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9.9a.9.9 0 0 1-.9-.9H8.9c0 1.16.94 2.1 2.1 2.1v-1.2Zm-.9-.9a.9.9 0 0 1 .9-.9V9.9A2.1 2.1 0 0 0 8.9 12h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2A2.1 2.1 0 0 0 11 9.9v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWhistle;
