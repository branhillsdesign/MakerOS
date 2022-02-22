import * as React from "react";

const SvgDoor = ({ title, titleId, ...props }) => (
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
      d="M19 5V2H4v20h15v-3m0-14h1v2h-1m0-2v2m0 0v10m0 2h1v-2h-1m0 2v-2M7 5v7h9V5H7Zm0 10h3v4H7v-4Zm6 0h3v4h-3v-4Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDoor;
