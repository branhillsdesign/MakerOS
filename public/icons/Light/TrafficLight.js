import * as React from "react";

const SvgTrafficLight = ({ title, titleId, ...props }) => (
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
      d="M8.1 4.6h7.8V3.4H8.1v1.2Zm7.3-.5v15.8h1.2V4.1h-1.2Zm.5 15.3H8.1v1.2h7.8v-1.2Zm-7.3.5V4.1H7.4v15.8h1.2Zm-.5-.5a.5.5 0 0 1 .5.5H7.4a.7.7 0 0 0 .7.7v-1.2Zm7.3.5a.5.5 0 0 1 .5-.5v1.2a.7.7 0 0 0 .7-.7h-1.2Zm.5-15.3a.5.5 0 0 1-.5-.5h1.2a.7.7 0 0 0-.7-.7v1.2ZM8.1 3.4a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5V3.4Z"
      fill="#555770"
    />
    <path
      d="M19.5 5c0 2.21-2 4-3 4V5h3ZM4.5 10c0 2.21 2 4 3 4v-4h-3ZM19.5 10c0 2.21-2 4-3 4v-4h3ZM4.5 15c0 2.21 2 4 3 4v-4h-3ZM19.5 15c0 2.21-2 4-3 4v-4h3ZM4.5 5c0 2.21 2 4 3 4V5h-3ZM12.9 7.5a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9.9a.9.9 0 0 1-.9-.9H9.9c0 1.16.94 2.1 2.1 2.1V8.4Zm-.9-.9a.9.9 0 0 1 .9-.9V5.4a2.1 2.1 0 0 0-2.1 2.1h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2A2.1 2.1 0 0 0 12 5.4v1.2Zm.9 5.4a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9.9a.9.9 0 0 1-.9-.9H9.9c0 1.16.94 2.1 2.1 2.1v-1.2Zm-.9-.9a.9.9 0 0 1 .9-.9V9.9A2.1 2.1 0 0 0 9.9 12h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2A2.1 2.1 0 0 0 12 9.9v1.2Zm.9 5.4a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9.9a.9.9 0 0 1-.9-.9H9.9c0 1.16.94 2.1 2.1 2.1v-1.2Zm-.9-.9a.9.9 0 0 1 .9-.9v-1.2a2.1 2.1 0 0 0-2.1 2.1h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTrafficLight;
