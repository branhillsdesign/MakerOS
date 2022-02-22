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
      d="m6.615 10.5-3.077-2L2 12l2.564 9h1.539m0 0L7.128 8l4.616-4 1.538 5-1.538 4m-5.641 8h2.564m0 0 3.077-8m-3.077 8h4.102L22 14V8M8.667 21 22 8m-10.256 5 5.128-5H22"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgIceCrystals;
