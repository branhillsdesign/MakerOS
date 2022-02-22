import * as React from "react";

const SvgSwitch = ({ title, titleId, ...props }) => (
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
      d="M15.914 11H20v2h-4.086l-1-1 1-1Zm-7.828 2H4v-2h4.086l1 1-1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M11 8.086V4h2v4.086l-1 1-1-1Zm2 7.828V20h-2v-4.086l1-1 1 1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSwitch;
