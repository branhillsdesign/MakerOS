import * as React from "react";

const SvgManRightHandUp = ({ title, titleId, ...props }) => (
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
      d="M12.5 9h-1a1 1 0 0 0-1 1v4.5h3V10a1 1 0 0 0-1-1ZM13.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#000"
    />
    <path
      d="M11.5 9.6h1V8.4h-1v1.2ZM22 8.4h-7v1.2h7V8.4Zm-14.6.1v7h1.2v-7H7.4ZM9.9 10v4.5h1.2V10H9.9Zm0 4.5V22h1.2v-7.5H9.9Zm3-4.5v4.5h1.2V10h-1.2Zm0 4.5V22h1.2v-7.5h-1.2Zm-2.4.6h3v-1.2h-3v1.2Zm2-5.5c.22 0 .4.18.4.4h1.2a1.6 1.6 0 0 0-1.6-1.6v1.2Zm-1-1.2A1.6 1.6 0 0 0 9.9 10h1.2c0-.22.18-.4.4-.4V8.4Zm1.4-2.9a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9.9a.9.9 0 0 1-.9-.9H9.9c0 1.16.94 2.1 2.1 2.1V6.4Zm-.9-.9a.9.9 0 0 1 .9-.9V3.4a2.1 2.1 0 0 0-2.1 2.1h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2A2.1 2.1 0 0 0 12 3.4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgManRightHandUp;
