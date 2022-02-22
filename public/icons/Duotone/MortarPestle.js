import * as React from "react";

const SvgMortarPestle = ({ title, titleId, ...props }) => (
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
      d="M7 21h10m-5-10 4.158-7.484a1.677 1.677 0 0 1 3.11 1.143L18 11h-6Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 21c5.523 0 10-4.477 10-10H2c0 5.523 4.477 10 10 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMortarPestle;
