import * as React from "react";

const SvgChef = ({ title, titleId, ...props }) => (
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
      d="M7 17v-6.064a3 3 0 1 1-.654-5.928c1.314 0 2.42.82 2.826 1.996a3 3 0 1 1 5.656 0 2.99 2.99 0 0 1 2.833-1.996A3 3 0 1 1 17 10.935V17M7 17v4h10v-4M7 17h10"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgChef;
