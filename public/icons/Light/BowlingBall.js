import * as React from "react";

const SvgBowlingBall = ({ title, titleId, ...props }) => (
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
      d="M21.4 12a9.4 9.4 0 0 1-9.4 9.4v1.2c5.854 0 10.6-4.746 10.6-10.6h-1.2ZM12 21.4A9.4 9.4 0 0 1 2.6 12H1.4c0 5.854 4.746 10.6 10.6 10.6v-1.2ZM2.6 12A9.4 9.4 0 0 1 12 2.6V1.4C6.146 1.4 1.4 6.146 1.4 12h1.2ZM12 2.6a9.4 9.4 0 0 1 9.4 9.4h1.2c0-5.854-4.746-10.6-10.6-10.6v1.2Z"
      fill="#555770"
    />
    <path
      d="M7.4 8.5a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm4-3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm0 4a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgBowlingBall;
