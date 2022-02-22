import * as React from "react";

const SvgIceSkates = ({ title, titleId, ...props }) => (
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
      d="M3 14c0 1.667 1 5 5 5h3m10 0h-4m0 0v-3h-6v3m6 0h-6"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M14 7.5v2.4a.1.1 0 0 1-.1.1H13m1-2.5V4.6a.1.1 0 0 1 .1-.1h5.8a.1.1 0 0 1 .1.1v2.9m-6 0h6m0 0V14a2 2 0 0 1-2 2H9.5a3 3 0 1 1 0-6h.5m0 0v2m0-2h3m0 0v2"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgIceSkates;
