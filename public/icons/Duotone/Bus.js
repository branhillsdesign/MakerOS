import * as React from "react";

const SvgBus = ({ title, titleId, ...props }) => (
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
      d="M5 7V6s0-2 7-2 7 2 7 2v1M5 7h14M5 7v5m14-5v5m0 0v6a1 1 0 0 1-1 1m1-7H5m0 0v6a1 1 0 0 0 1 1m0 0v1.9a.1.1 0 0 0 .1.1h.8a.1.1 0 0 0 .1-.1V19m-1 0h1m0 0h10m0 0v1.9a.1.1 0 0 0 .1.1h.8a.1.1 0 0 0 .1-.1V19m-1 0h1"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M10 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBus;
