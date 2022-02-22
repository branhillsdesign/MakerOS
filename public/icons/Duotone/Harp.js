import * as React from "react";

const SvgHarp = ({ title, titleId, ...props }) => (
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
      d="M7 7.5h10M10 4v16.71M14 4v16.71"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 0c1 0 3 1 3 3.5S5 10.134 5 14a7.003 7.003 0 0 0 5 6.71c.634.189 1.305.29 2 .29.695 0 1.366-.101 2-.29 2.892-.86 5-3.539 5-6.71 0-3.866-2-4-2-6.5S19 4 20 4m0 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHarp;
