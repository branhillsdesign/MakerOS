import * as React from "react";

const SvgMotorsports = ({ title, titleId, ...props }) => (
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
      d="M14 19a7 7 0 1 0 0-14c-2.779 0-4.899.782-6.5 2.007C5.205 8.762 3.975 11.427 3.396 14a18.018 18.018 0 0 0-.433 4.068c.005.525.443.931.968.93 3.692-.005 9.702-.01 10.07.002Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M10.5 14a2.5 2.5 0 0 0 1.24-4.672L7.5 7.007C5.205 8.762 3.975 11.427 3.396 14H10.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMotorsports;
