import * as React from "react";

const SvgAlertRinging = ({ title, titleId, ...props }) => (
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
      d="M13.265 19.6a1.4 1.4 0 0 1-2.53 0H13.265Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M19 17v.6a.6.6 0 0 0 .5-.933L19 17Zm-2-3h-.6a.6.6 0 0 0 .1.333L17 14ZM7 14l.5.333A.6.6 0 0 0 7.6 14H7Zm-2 3-.5-.333a.6.6 0 0 0 .5.933V17Zm2.6-7A4.4 4.4 0 0 1 12 5.6V4.4A5.6 5.6 0 0 0 6.4 10h1.2ZM12 5.6a4.4 4.4 0 0 1 4.4 4.4h1.2A5.6 5.6 0 0 0 12 4.4v1.2Zm-5 12h10v-1.2H7v1.2Zm10 0h2v-1.2h-2v1.2Zm.6-3.6v-4h-1.2v4h1.2Zm1.9 2.667-2-3-1 .666 2 3 1-.666ZM6.4 10v4h1.2v-4H6.4Zm.1 3.667-2 3 1 .666 2-3-1-.666ZM5 17.6h2v-1.2H5v1.2ZM12.6 5V2h-1.2v3h1.2Z"
      fill="#555770"
    />
    <path
      d="M17 3.125A8.508 8.508 0 0 1 20.263 8M7 3.125A8.507 8.507 0 0 0 3.737 8"
      stroke="#555770"
      strokeWidth={1.2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgAlertRinging;
