import * as React from "react";

const SvgEmoticonDevil = ({ title, titleId, ...props }) => (
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
      d="M3 12a9 9 0 1 0 16.882-4.349C21.5 6 21.5 3.5 20 2c-1 2-1.476 1.976-2.43 2.93A8.962 8.962 0 0 0 12 3a8.962 8.962 0 0 0-5.57 1.93C5.476 3.976 5 4 4 2 2.5 3.5 2.5 6 4.12 7.651A8.96 8.96 0 0 0 3 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7 14c.998 1.793 2.863 3 5 3 2.136 0 4.002-1.207 5-3M9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonDevil;
