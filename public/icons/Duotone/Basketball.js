import * as React from "react";

const SvgBasketball = ({ title, titleId, ...props }) => (
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
      d="M21 12h-6m-3 9V3m-9 9h6m0 0a6.998 6.998 0 0 0-3.6-6.12M9 12a6.998 6.998 0 0 1-3.6 6.12M9 12h6m0 0a6.998 6.998 0 0 1 3.6-6.12M15 12a6.998 6.998 0 0 0 3.6 6.12"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18.6 5.88A8.976 8.976 0 0 0 12 3a8.976 8.976 0 0 0-6.6 2.88A8.968 8.968 0 0 0 3 12c0 2.363.91 4.514 2.4 6.12A8.976 8.976 0 0 0 12 21a8.975 8.975 0 0 0 6.6-2.88A8.968 8.968 0 0 0 21 12c0-2.363-.91-4.514-2.4-6.12Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBasketball;
