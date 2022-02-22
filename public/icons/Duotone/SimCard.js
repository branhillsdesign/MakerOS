import * as React from "react";

const SvgSimCard = ({ title, titleId, ...props }) => (
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
      d="M19 7h1a1 1 0 0 0-.293-.707L19 7Zm-4-4 .707-.707A1 1 0 0 0 15 2v1ZM6 22h12v-2H6v2ZM4 4v16h2V4H4Zm16 16V7h-2v13h2ZM15 2H6v2h9V2Zm4.707 4.293-4-4-1.414 1.414 4 4 1.414-1.414ZM18 22a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
    <path
      d="M9 18v-4m0-3v2m3 5v-2m0-5v4m3 3v-4m0-3v2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSimCard;
