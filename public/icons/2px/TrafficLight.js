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
      d="M8.1 5h7.8V3H8.1v2Zm6.9-.9v15.8h2V4.1h-2Zm.9 14.9H8.1v2h7.8v-2Zm-6.9.9V4.1H7v15.8h2Zm-.9-.9a.9.9 0 0 1 .9.9H7A1.1 1.1 0 0 0 8.1 21v-2Zm6.9.9a.9.9 0 0 1 .9-.9v2a1.1 1.1 0 0 0 1.1-1.1h-2ZM15.9 5a.9.9 0 0 1-.9-.9h2A1.1 1.1 0 0 0 15.9 3v2ZM8.1 3A1.1 1.1 0 0 0 7 4.1h2a.9.9 0 0 1-.9.9V3Z"
      fill="#555770"
    />
    <path d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#424242" />
    <path
      d="M20 5c0 2.21-2 4-3 4V5h3ZM4 10c0 2.21 2 4 3 4v-4H4ZM20 10c0 2.21-2 4-3 4v-4h3ZM4 15c0 2.21 2 4 3 4v-4H4ZM20 15c0 2.21-2 4-3 4v-4h3Z"
      fill="#555770"
    />
    <path
      d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#424242"
    />
    <path d="M4 5c0 2.21 2 4 3 4V5H4Z" fill="#555770" />
  </svg>
);

export default SvgTrafficLight;
