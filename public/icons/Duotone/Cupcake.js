import * as React from "react";

const SvgCupcake = ({ title, titleId, ...props }) => (
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
      d="M13.973 5.332a2 2 0 1 0-3.945 0m3.945 0a2 2 0 0 1-3.946 0m3.946 0A6.003 6.003 0 0 1 17.659 13H6.34a6.003 6.003 0 0 1 3.686-7.668"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 13v7m0-7H8.5m3.5 0h3.5M12 20H9.5m2.5 0h2.5m-6-7H5l2 7h2.5m-1-7 1 7m6-7H19l-2 7h-2.5m1-7-1 7"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCupcake;
