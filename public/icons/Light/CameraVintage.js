import * as React from "react";

const SvgCameraVintage = ({ title, titleId, ...props }) => (
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
      d="M5 4v-.6h-.6V4H5Zm2 0h.6v-.6H7V4Zm14 14.4H3v1.2h18v-1.2ZM21.4 6v12h1.2V6h-1.2ZM2.6 18V6H1.4v12h1.2ZM3 5.6h2V4.4H3v1.2ZM5.6 5V4H4.4v1h1.2ZM5 4.6h2V3.4H5v1.2Zm0 1h2V4.4H5v1.2Zm2 0h14V4.4H7v1.2ZM6.4 4v1h1.2V4H6.4ZM20 7.4h-2v1.2h2V7.4Zm-17 11a.4.4 0 0 1-.4-.4H1.4A1.6 1.6 0 0 0 3 19.6v-1.2Zm18 1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM22.6 6A1.6 1.6 0 0 0 21 4.4v1.2c.22 0 .4.18.4.4h1.2Zm-20 0c0-.22.18-.4.4-.4V4.4A1.6 1.6 0 0 0 1.4 6h1.2Z"
      fill="#555770"
    />
    <circle cx={12} cy={12} r={4.4} stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgCameraVintage;
