import * as React from "react";

const SvgSwissKnife = ({ title, titleId, ...props }) => (
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
      d="M21 18.5V7.76a6 6 0 0 0-2.095-4.556L17.5 2l-1.405 1.204A6 6 0 0 0 14 7.76V15"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6.5 22h11a3.5 3.5 0 1 0 0-7h-11a3.5 3.5 0 1 0 0 7Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M6 18.5h3m9 0a.5.5 0 0 1-1 0 .5.5 0 0 1 1 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSwissKnife;
