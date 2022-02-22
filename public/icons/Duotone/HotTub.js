import * as React from "react";

const SvgHotTub = ({ title, titleId, ...props }) => (
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
      d="M7 11a1 1 0 0 0 1 1v1m-1-2a1 1 0 0 1 1-1c.339 0 .597.164.82.426C9.545 11.284 11.2 13 12 13H8m-1-2v2h1m6-10c0 1 0 2 1 3.5S16 9 16 10m2-7c0 1 0 2 1 3.5S20 9 20 10M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M8 13h4v8m-4-8H7m1 0v8m0 0h4m-4 0H4m8 0h4m0-8v8m0-8h4m-4 0H4m12 8h4m0-8h1v7a1 1 0 0 1-1 1m0-8v8M4 13H3v7a1 1 0 0 0 1 1m0-8v8"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHotTub;
