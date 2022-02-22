import * as React from "react";

const SvgSpeaker = ({ title, titleId, ...props }) => (
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
      d="M5.1 22v1-1Zm13.8 0v-1 1Zm.1-.1h-1 1Zm0-19.8h1-1Zm-14 0H4h1Zm0 19.8h1-1ZM5.1 2v1-1ZM15 15h-1 1Zm-3-3v-1 1Zm0 6v-1 1Zm-3-3H8h1Zm4-8h1-1Zm-1-1v1-1Zm0 2v1-1Zm-1-1h1-1ZM5.1 23h13.8v-2H5.1v2ZM20 21.9V2.1h-2v19.8h2ZM4 2.1v19.8h2V2.1H4ZM18.9 1H5.1v2h13.8V1ZM20 2.1A1.1 1.1 0 0 0 18.9 1v2a.9.9 0 0 1-.9-.9h2ZM18.9 23a1.1 1.1 0 0 0 1.1-1.1h-2a.9.9 0 0 1 .9-.9v2ZM5.1 21a.9.9 0 0 1 .9.9H4A1.1 1.1 0 0 0 5.1 23v-2ZM6 2.1a.9.9 0 0 1-.9.9V1A1.1 1.1 0 0 0 4 2.1h2ZM16 15a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2h2Zm-4 4a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2v2Zm0-2a2 2 0 0 1-2-2H8a4 4 0 0 0 4 4v-2Zm-2-2a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4h2Zm4-8a2 2 0 0 0-2-2v2h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm0-2h-2a2 2 0 0 0 2 2V7Zm0 0V5a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSpeaker;
