import * as React from "react";

const SvgCherry = ({ title, titleId, ...props }) => (
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
      d="M11 6.675a5.655 5.655 0 0 0 5.606 1.604 5.655 5.655 0 0 0 4.053-4.192 5.655 5.655 0 0 0-5.606-1.604A5.655 5.655 0 0 0 11 6.675Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M5.5 14c0-2 1.4-5.3 5-8.5m8 8.5c-4.8-2.4-7.167-6.167-8-8.5m0 0V3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM22 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCherry;
