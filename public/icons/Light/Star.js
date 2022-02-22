import * as React from "react";

const SvgStar = ({ title, titleId, ...props }) => (
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
      d="m12 3 2.433 5.65 6.127.569-4.623 4.06 1.353 6.002L12 16.14l-5.29 3.141 1.353-6.002L3.44 9.22l6.127-.568L12 3Z"
      stroke="#555770"
      strokeWidth={1.2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgStar;
