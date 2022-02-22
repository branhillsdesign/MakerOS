import * as React from "react";

const SvgPhoneNoNotch = ({ title, titleId, ...props }) => (
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
      d="M11 3v.6V3Zm2 0v.6V3ZM8 21.6h8v-1.2H8v1.2Zm9.6-1.6V4h-1.2v16h1.2ZM6.4 4v16h1.2V4H6.4ZM11 2.4H8v1.2h3V2.4Zm5 0h-3v1.2h3V2.4Zm-3 0h-2v1.2h2V2.4ZM17.6 4A1.6 1.6 0 0 0 16 2.4v1.2c.22 0 .4.18.4.4h1.2ZM16 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm-8-1.2a.4.4 0 0 1-.4-.4H6.4A1.6 1.6 0 0 0 8 21.6v-1.2ZM7.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 6.4 4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPhoneNoNotch;
