import * as React from "react";

const SvgMakerOsIcon = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M12.163 8.506a.5.5 0 1 0 .707.707l-.707-.707Zm.707-3.535a.5.5 0 0 0-.707.707l.707-.707Zm0 4.242.354-.353-.707-.707-.354.353.707.707Zm.354-3.889-.354-.353-.707.707.354.353.707-.707Zm0 3.536a2.5 2.5 0 0 0 0-3.536l-.707.707a1.5 1.5 0 0 1 0 2.122l.707.707ZM2.263 5.678a.5.5 0 0 0-.707-.707l.707.707Zm-.707 3.535a.5.5 0 0 0 .707-.707l-.707.707Zm0-4.242-.353.353.707.707.353-.353-.707-.707ZM1.203 8.86l.353.353.707-.707-.353-.353-.707.707Zm0-3.536a2.5 2.5 0 0 0 0 3.536l.707-.707a1.5 1.5 0 0 1 0-2.122l-.707-.707ZM8.627 2.142a.5.5 0 1 0 .708-.707l-.708.707Zm-3.535-.707a.5.5 0 1 0 .707.707l-.707-.707Zm4.243 0-.354-.354-.707.708.353.353.708-.707Zm-3.89-.354-.353.354.707.707.354-.353-.708-.708Zm3.536 0a2.5 2.5 0 0 0-3.536 0l.708.708a1.5 1.5 0 0 1 2.12 0l.708-.708ZM5.799 12.042a.5.5 0 0 0-.707.707l.707-.707Zm3.536.707a.5.5 0 1 0-.708-.707l.708.707Zm-4.243 0 .353.353.708-.707-.354-.353-.707.707Zm3.889.353.354-.353-.708-.707-.353.353.707.707Zm-3.536 0a2.5 2.5 0 0 0 3.536 0l-.707-.707a1.5 1.5 0 0 1-2.121 0l-.708.707Z"
      fill="currentColor"
    />
    <circle
      cx={7.213}
      cy={7.092}
      r={2}
      transform="rotate(45 7.213 7.092)"
      stroke="#8F90A6"
    />
  </svg>
);

export default SvgMakerOsIcon;
