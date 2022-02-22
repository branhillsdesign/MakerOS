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
      d="M11 4h2v4.086l-1 1-1-1V4Zm-7 9v-2h4.086l1 1-1 1H4Zm7 7v-4.086l1-1 1 1V20h-2Zm9-7h-4.086l-1-1 1-1H20v2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSwitch;
