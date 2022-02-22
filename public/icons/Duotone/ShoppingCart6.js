import * as React from "react";

const SvgShoppingCart6 = ({ title, titleId, ...props }) => (
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
      d="M8 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M1 3h2.5l1 2m0 0h15.328a.1.1 0 0 1 .087.15L16 12H8l-.5-1m-3-6 3 6M19 16H6.618a1 1 0 0 1-.894-1.447L7.5 11"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShoppingCart6;
