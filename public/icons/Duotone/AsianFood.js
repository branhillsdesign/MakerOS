import * as React from "react";

const SvgAsianFood = ({ title, titleId, ...props }) => (
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
      d="M7 21h10M7 11 4 2m6 9L9 1.5m4.5 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
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

export default SvgAsianFood;
