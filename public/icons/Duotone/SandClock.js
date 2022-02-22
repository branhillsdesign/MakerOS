import * as React from "react";

const SvgSandClock = ({ title, titleId, ...props }) => (
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
      d="M8.762 21.709h6.476c.935 0 1.359-1.17.64-1.768l-3.238-2.699a1 1 0 0 0-1.28 0l-3.238 2.699c-.719.598-.295 1.768.64 1.768Z"
      fill="currentColor"
    />
    <path
      d="M7 3h10v2.929a4 4 0 0 1-1.172 2.828L14 10.586a2 2 0 0 0 0 2.828l1.828 1.829A4 4 0 0 1 17 18.07V21H7v-2.929a4 4 0 0 1 1.172-2.828L10 13.414a2 2 0 0 0 0-2.828L8.172 8.757A4 4 0 0 1 7 5.93V3Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSandClock;
