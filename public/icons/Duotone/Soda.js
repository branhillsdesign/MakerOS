import * as React from "react";

const SvgSoda = ({ title, titleId, ...props }) => (
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
      d="M6.623 10H12.5m4.877 0H12.5M15 1l-2.5 9"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M15.5 22h-7c0-3 .173-6.5-1-9a10.112 10.112 0 0 1-.877-3C6.442 8.658 6.5 7.358 6.5 6h11c0 1.358.059 2.658-.123 4-.13.966-.386 1.954-.877 3-1.173 2.5-1 6-1 9Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSoda;
