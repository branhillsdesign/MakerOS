import * as React from "react";

const SvgManLeftHandUp = ({ title, titleId, ...props }) => (
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
      d="M11.5 9h1a1 1 0 0 1 1 1v4.5h-3V10a1 1 0 0 1 1-1ZM10.5 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      fill="#000"
    />
    <path
      d="M12.5 9.6h-1V8.4h1v1.2ZM2 8.4h7v1.2H2V8.4Zm14.6.1v7h-1.2v-7h1.2ZM14.1 10v4.5h-1.2V10h1.2Zm0 4.5V22h-1.2v-7.5h1.2Zm-3-4.5v4.5H9.9V10h1.2Zm0 4.5V22H9.9v-7.5h1.2Zm2.4.6h-3v-1.2h3v1.2Zm-2-5.5a.4.4 0 0 0-.4.4H9.9a1.6 1.6 0 0 1 1.6-1.6v1.2Zm1-1.2a1.6 1.6 0 0 1 1.6 1.6h-1.2a.4.4 0 0 0-.4-.4V8.4Zm-1.4-2.9a.9.9 0 0 0 .9.9v1.2a2.1 2.1 0 0 1-2.1-2.1h1.2Zm.9.9a.9.9 0 0 0 .9-.9h1.2A2.1 2.1 0 0 1 12 7.6V6.4Zm.9-.9a.9.9 0 0 0-.9-.9V3.4c1.16 0 2.1.94 2.1 2.1h-1.2Zm-.9-.9a.9.9 0 0 0-.9.9H9.9c0-1.16.94-2.1 2.1-2.1v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgManLeftHandUp;
