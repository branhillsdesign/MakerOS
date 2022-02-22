import * as React from "react";

const SvgMakerOsIcon12Px = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M14.496 10.253a.5.5 0 0 0 .707.707l-.707-.707Zm.707-4.243a.5.5 0 0 0-.707.708l.707-.708Zm0 4.95.707-.707-.707-.707-.707.707.707.707Zm.707-4.242-.707-.708-.707.708.707.707.707-.707Zm0 3.535a2.5 2.5 0 0 0 0-3.535l-.707.707a1.5 1.5 0 0 1 0 2.121l.707.707ZM2.475 6.718a.5.5 0 1 0-.707-.708l.707.708Zm-.707 4.242a.5.5 0 1 0 .707-.707l-.707.707Zm0-4.95-.707.708.707.707.707-.707-.707-.708Zm-.707 4.243.707.707.707-.707-.707-.707-.707.707Zm0-3.535a2.5 2.5 0 0 0 0 3.535l.707-.707a1.5 1.5 0 0 1 0-2.121l-.707-.707ZM10.253 2.475a.5.5 0 1 0 .707-.707l-.707.707ZM6.01 1.768a.5.5 0 0 0 .708.707l-.708-.707Zm4.95 0-.707-.707-.707.707.707.707.707-.707ZM6.718 1.06l-.708.707.708.707.707-.707-.707-.707Zm3.535 0a2.5 2.5 0 0 0-3.535 0l.707.707a1.5 1.5 0 0 1 2.121 0l.707-.707ZM6.718 14.496a.5.5 0 1 0-.708.707l.708-.707Zm4.242.707a.5.5 0 1 0-.707-.707l.707.707Zm-4.95 0 .708.707.707-.707-.707-.707-.708.707Zm4.243.707.707-.707-.707-.707-.707.707.707.707Zm-3.535 0a2.5 2.5 0 0 0 3.535 0l-.707-.707a1.5 1.5 0 0 1-2.121 0l-.707.707Z"
      fill="currentColor"
    />
    <circle
      cx={8.485}
      cy={8.485}
      r={2.5}
      transform="rotate(45 8.485 8.485)"
      stroke="#555770"
    />
  </svg>
);

export default SvgMakerOsIcon12Px;