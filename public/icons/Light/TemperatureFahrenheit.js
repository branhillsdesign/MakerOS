import * as React from "react";

const SvgTemperatureFahrenheit = ({ title, titleId, ...props }) => (
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
      d="m6 17.05.12.588L6 17.05Zm1 0-.12.588.12-.588ZM15 3v-.6h-.6V3h.6ZM8.4 19.5a1.9 1.9 0 0 1-1.9 1.9v1.2a3.1 3.1 0 0 0 3.1-3.1H8.4Zm-1.9 1.9a1.9 1.9 0 0 1-1.9-1.9H3.4a3.1 3.1 0 0 0 3.1 3.1v-1.2Zm-1.9-1.9a1.9 1.9 0 0 1 1.52-1.862l-.24-1.176A3.1 3.1 0 0 0 3.4 19.5h1.2Zm1.52-1.862c.122-.025.25-.038.38-.038v-1.2c-.212 0-.419.021-.62.062l.24 1.176Zm.48-.588V3.5H5.4v13.55h1.2Zm-.1.55c.13 0 .258.013.38.038l.24-1.176c-.201-.04-.408-.062-.62-.062v1.2Zm.38.038A1.9 1.9 0 0 1 8.4 19.5h1.2a3.1 3.1 0 0 0-2.48-3.038l-.24 1.176ZM6.4 3.5v13.55h1.2V3.5H6.4Zm.1.1a.1.1 0 0 1-.1-.1h1.2a1.1 1.1 0 0 0-1.1-1.1v1.2Zm.1-.1a.1.1 0 0 1-.1.1V2.4a1.1 1.1 0 0 0-1.1 1.1h1.2Zm8.4.1h5V2.4h-5v1.2Zm-.6-.6v4h1.2V3h-1.2Zm0 4v4h1.2V7h-1.2Zm.6.6h4V6.4h-4v1.2Z"
      fill="#555770"
    />
    <circle cx={10.5} cy={3.5} r={0.9} stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgTemperatureFahrenheit;
