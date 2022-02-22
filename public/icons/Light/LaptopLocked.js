import * as React from "react";

const SvgLaptopLocked = ({ title, titleId, ...props }) => (
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
    <path d="M24 17.4H0v1.2h24v-1.2Z" fill="#555770" />
    <path
      d="M4 17.6h17v-1.2H4v1.2ZM2.4 6v10h1.2V6H2.4ZM13 4.4H4v1.2h9V4.4ZM3.6 6c0-.22.18-.4.4-.4V4.4A1.6 1.6 0 0 0 2.4 6h1.2ZM4 16.4a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 17.6v-1.2ZM21.4 5v2.5h1.2V5h-1.2Zm.6 1.9h-6v1.2h6V6.9Zm-5.4.6V5h-1.2v2.5h1.2Zm-.6-.6h-.9v1.2h.9V6.9Zm-1.6.7V12h1.2V7.6h-1.2Zm1.6 6h6v-1.2h-6v1.2Zm7.6-1.6V7.6h-1.2V12h1.2Zm-.7-5.1H22v1.2h.9V6.9Zm.7.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-8.5-.7a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5V6.9Zm6.9 6.7a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm-3-11A2.4 2.4 0 0 1 21.4 5h1.2A3.6 3.6 0 0 0 19 1.4v1.2ZM14.4 12a1.6 1.6 0 0 0 1.6 1.6v-1.2a.4.4 0 0 1-.4-.4h-1.2ZM19 1.4A3.6 3.6 0 0 0 15.4 5h1.2A2.4 2.4 0 0 1 19 2.6V1.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLaptopLocked;
