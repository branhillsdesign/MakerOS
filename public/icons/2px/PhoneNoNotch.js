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
      d="M11 3v1-1Zm2 0v1-1ZM8 22h8v-2H8v2Zm10-2V4h-2v16h2ZM6 4v16h2V4H6Zm5-2H8v2h3V2Zm5 0h-3v2h3V2Zm-3 0h-2v2h2V2Zm5 2a2 2 0 0 0-2-2v2h2Zm-2 18a2 2 0 0 0 2-2h-2v2Zm-8-2H6a2 2 0 0 0 2 2v-2ZM8 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPhoneNoNotch;
