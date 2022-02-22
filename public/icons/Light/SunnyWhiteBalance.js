import * as React from "react";

const SvgSunnyWhiteBalance = ({ title, titleId, ...props }) => (
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
      d="M16.4 12a4.4 4.4 0 0 1-4.4 4.4v1.2a5.6 5.6 0 0 0 5.6-5.6h-1.2ZM12 16.4A4.4 4.4 0 0 1 7.6 12H6.4a5.6 5.6 0 0 0 5.6 5.6v-1.2ZM7.6 12A4.4 4.4 0 0 1 12 7.6V6.4A5.6 5.6 0 0 0 6.4 12h1.2ZM12 7.6a4.4 4.4 0 0 1 4.4 4.4h1.2A5.6 5.6 0 0 0 12 6.4v1.2ZM11.4 1v3h1.2V1h-1.2Zm0 19v3h1.2v-3h-1.2ZM23 11.4h-3v1.2h3v-1.2Zm-19 0H1v1.2h3v-1.2Zm15.354-7.602-2.121 2.12.848.85 2.121-2.122-.848-.848ZM5.919 17.233l-2.121 2.12.848.85 2.121-2.122-.848-.848Zm14.283 2.12-2.12-2.12-.85.848 2.122 2.121.848-.848ZM6.767 5.92l-2.12-2.121-.85.848L5.92 6.767l.848-.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSunnyWhiteBalance;
