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
      d="M15.9 4H8.1a.1.1 0 0 0-.1.1v15.8a.1.1 0 0 0 .1.1h7.8a.1.1 0 0 0 .1-.1V4.1a.1.1 0 0 0-.1-.1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 5c0 2.21-2 4-3 4V5h3ZM4 10c0 2.21 2 4 3 4v-4H4ZM20 10c0 2.21-2 4-3 4v-4h3ZM4 15c0 2.21 2 4 3 4v-4H4ZM20 15c0 2.21-2 4-3 4v-4h3ZM13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM4 5c0 2.21 2 4 3 4V5H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrafficLight;
