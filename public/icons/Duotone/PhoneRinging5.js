import * as React from "react";

const SvgPhoneRinging5 = ({ title, titleId, ...props }) => (
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
      d="M19.3 13.716a9.827 9.827 0 0 0-.154-7.651L15.87 6a.097.097 0 0 0-.1.097l-.027 4.02c0 .026.01.051.028.07l3.53 3.529Zm0 0a9.956 9.956 0 0 1-2.22 3.365 9.956 9.956 0 0 1-3.364 2.219m0 0a9.827 9.827 0 0 1-7.651-.154L6 15.87a.097.097 0 0 1 .097-.1l4.02-.027c.026 0 .051.01.07.028l3.529 3.53Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8 13a5 5 0 0 1 5-5M4 13a9 9 0 0 1 9-9"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPhoneRinging5;
