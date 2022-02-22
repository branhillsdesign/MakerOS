import * as React from "react";

const SvgIceCrystals = ({ title, titleId, ...props }) => (
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
      d="m6.615 10.5-3.077-2L2 12l2.564 9h1.473"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M6.103 21 7.128 8l4.616-4 1.538 5-1.538 4-3.077 8H6.103Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m8.667 21 3.077-8 5.128-5H22M8.667 21h4.103L22 14V8M8.667 21 22 8"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgIceCrystals;
