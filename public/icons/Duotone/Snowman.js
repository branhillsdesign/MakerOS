import * as React from "react";

const SvgSnowman = ({ title, titleId, ...props }) => (
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
      d="M16.5 13.397 21 9m0 0V5m0 4h2.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6.535 8A3.982 3.982 0 0 1 6 6a3.99 3.99 0 0 1 1.354-3h5.292A3.99 3.99 0 0 1 14 6c0 .729-.195 1.412-.535 2m-7.073 2a7 7 0 1 0 7.215 0"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M11 10H5.6a.1.1 0 0 1-.1-.1V8.1a.1.1 0 0 1 .1-.1h8.8a.1.1 0 0 1 .1.1v1.8a.1.1 0 0 1-.1.1H12m-1 0v5.9a.1.1 0 0 0 .1.1h.8a.1.1 0 0 0 .1-.1V10m-1 0h1M5 3h2.5M15 3h-2.5m-5 0V1.1a.1.1 0 0 1 .1-.1h4.8a.1.1 0 0 1 .1.1V3m-5 0h5"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSnowman;
