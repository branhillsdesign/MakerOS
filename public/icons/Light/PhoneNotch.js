import * as React from "react";

const SvgPhoneNotch = ({ title, titleId, ...props }) => (
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
      d="M10 3v-.6.6Zm4 0v-.6.6Zm-3.9 1v-.6.6ZM8 21.6h8v-1.2H8v1.2Zm9.6-1.6V4h-1.2v16h1.2ZM6.4 4v16h1.2V4H6.4ZM10 2.4H8v1.2h2V2.4Zm-.6.6v.9h1.2V3H9.4Zm.7 1.6h3.8V3.4h-3.8v1.2ZM16 2.4h-2v1.2h2V2.4Zm-2 0h-4v1.2h4V2.4Zm.6 1.5V3h-1.2v.9h1.2Zm-.7.7a.7.7 0 0 0 .7-.7h-1.2a.5.5 0 0 1 .5-.5v1.2Zm3.7-.6A1.6 1.6 0 0 0 16 2.4v1.2c.22 0 .4.18.4.4h1.2ZM16 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm-8-1.2a.4.4 0 0 1-.4-.4H6.4A1.6 1.6 0 0 0 8 21.6v-1.2ZM9.4 3.9a.7.7 0 0 0 .7.7V3.4a.5.5 0 0 1 .5.5H9.4ZM7.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 6.4 4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPhoneNotch;
