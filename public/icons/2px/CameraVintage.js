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
      d="M5 4V3H4v1h1Zm2 0h1V3H7v1Zm14 14H3v2h18v-2Zm0-12v12h2V6h-2ZM3 18V6H1v12h2ZM3 6h2V4H3v2Zm3-1V4H4v1h2ZM5 5h2V3H5v2Zm0 1h2V4H5v2Zm2 0h14V4H7v2ZM6 4v1h2V4H6Zm14 3h-2v2h2V7ZM3 18H1a2 2 0 0 0 2 2v-2Zm18 2a2 2 0 0 0 2-2h-2v2Zm2-14a2 2 0 0 0-2-2v2h2ZM3 6V4a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
    <circle cx={12} cy={12} r={4} stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgCameraVintage;
