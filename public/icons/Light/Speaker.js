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
      d="M5.1 22v.6-.6Zm13.8 0v-.6.6Zm.1-.1h-.6.6Zm0-19.8h.6-.6Zm-14 0h-.6.6Zm0 19.8h.6H5ZM5.1 2v.6V2ZM15 15h-.6.6Zm-3-3v-.6.6Zm0 6v-.6.6Zm-3-3h-.6.6Zm4-8h.6-.6Zm-1-1v.6V6Zm0 2v.6V8Zm-1-1h.6-.6ZM5.1 22.6h13.8v-1.2H5.1v1.2Zm14.5-.7V2.1h-1.2v19.8h1.2ZM4.4 2.1v19.8h1.2V2.1H4.4Zm14.5-.7H5.1v1.2h13.8V1.4Zm.7.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-.7 20.5a.7.7 0 0 0 .7-.7h-1.2a.5.5 0 0 1 .5-.5v1.2ZM5.1 21.4a.5.5 0 0 1 .5.5H4.4a.7.7 0 0 0 .7.7v-1.2Zm.5-19.3a.5.5 0 0 1-.5.5V1.4a.7.7 0 0 0-.7.7h1.2Zm10 12.9a3.6 3.6 0 0 0-3.6-3.6v1.2a2.4 2.4 0 0 1 2.4 2.4h1.2ZM12 18.6a3.6 3.6 0 0 0 3.6-3.6h-1.2a2.4 2.4 0 0 1-2.4 2.4v1.2Zm0-1.2A2.4 2.4 0 0 1 9.6 15H8.4a3.6 3.6 0 0 0 3.6 3.6v-1.2ZM9.6 15a2.4 2.4 0 0 1 2.4-2.4v-1.2A3.6 3.6 0 0 0 8.4 15h1.2Zm4-8A1.6 1.6 0 0 0 12 5.4v1.2c.22 0 .4.18.4.4h1.2ZM12 8.6A1.6 1.6 0 0 0 13.6 7h-1.2a.4.4 0 0 1-.4.4v1.2Zm0-1.2a.4.4 0 0 1-.4-.4h-1.2A1.6 1.6 0 0 0 12 8.6V7.4Zm-.4-.4c0-.22.18-.4.4-.4V5.4A1.6 1.6 0 0 0 10.4 7h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSpeaker;
