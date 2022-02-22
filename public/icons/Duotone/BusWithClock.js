import * as React from "react";

const SvgBuswithclock = ({ title, titleId, ...props }) => (
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
      d="M5 7V6s0-1.962 6.802-2A5.973 5.973 0 0 0 11 7M5 7v5m0-5h6m-6 5v6a1 1 0 0 0 1 1m-1-7h8.682M6 19v1.9a.1.1 0 0 0 .1.1h.8a.1.1 0 0 0 .1-.1V19m-1 0h1m0 0h10m0 0v1.9a.1.1 0 0 0 .1.1h.8a.1.1 0 0 0 .1-.1V19m-1 0h1m0 0a1 1 0 0 0 1-1v-5.341A5.99 5.99 0 0 1 17 13a5.973 5.973 0 0 1-3.318-1M11 7a5.995 5.995 0 0 0 2.682 5"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M17 3.5V7l2.5 2.5M23 7a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M10 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBuswithclock;
