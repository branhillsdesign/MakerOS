import * as React from "react";

const SvgSunnyWhiteBalance = ({ title, titleId, ...props }) => (
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
      d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 1v3m0 16v3m11-11h-3M4 12H1m18.778-7.778-2.121 2.121M6.343 17.657l-2.121 2.121m15.556 0-2.121-2.121M6.343 6.343 4.222 4.222"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSunnyWhiteBalance;
