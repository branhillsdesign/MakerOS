import * as React from "react";

const SvgCrackedEgg = ({ title, titleId, ...props }) => (
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
      d="m6.14 13 3.36-1.5 2.5 3 2.5-1.5M16 7.148 13 9"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18 15a6 6 0 0 1-12 0c0-.57.044-1.256.141-2C6.606 9.424 8.275 4.5 12 4.5c1.764 0 3.068 1.105 4 2.648 1.446 2.392 2 5.838 2 7.852Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCrackedEgg;
