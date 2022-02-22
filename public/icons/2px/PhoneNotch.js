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
      d="M12.9 4v1-1Zm-1.8 0V3v1ZM8 22h8v-2H8v2Zm10-2V4h-2v16h2ZM6 4v16h2V4H6Zm5-2H8v2h3V2Zm-1 1v.9h2V3h-2Zm1.1 2h1.8V3h-1.8v2ZM16 2h-3v2h3V2Zm-3 0h-2v2h2V2Zm1 1.9V3h-2v.9h2ZM12.9 5A1.1 1.1 0 0 0 14 3.9h-2a.9.9 0 0 1 .9-.9v2ZM18 4a2 2 0 0 0-2-2v2h2Zm-2 18a2 2 0 0 0 2-2h-2v2Zm-8-2H6a2 2 0 0 0 2 2v-2Zm2-16.1A1.1 1.1 0 0 0 11.1 5V3a.9.9 0 0 1 .9.9h-2ZM8 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPhoneNotch;
