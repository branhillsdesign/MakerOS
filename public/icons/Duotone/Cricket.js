import * as React from "react";

const SvgCricket = ({ title, titleId, ...props }) => (
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
      d="M18.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m15 17 4.5 4.5M6.07 5.07l8.36 8.36a.1.1 0 0 1 0 .14l-2.86 2.86a.1.1 0 0 1-.14 0L3.07 8.07a.1.1 0 0 1 0-.14l2.86-2.86a.1.1 0 0 1 .14 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCricket;
