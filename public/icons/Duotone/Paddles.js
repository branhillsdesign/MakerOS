import * as React from "react";

const SvgPaddles = ({ title, titleId, ...props }) => (
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
      d="M9.083 11.083a3.005 3.005 0 0 0 0-4.25L6.25 4 2 8.25l2.833 2.833a3.005 3.005 0 0 0 4.25 0Zm0 0 8.5 8.5m0 0L16.167 21m1.416-1.417L19 18.167"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M14.917 11.083a3.005 3.005 0 0 1 0-4.25L17.75 4 22 8.25l-2.833 2.833a3.005 3.005 0 0 1-4.25 0Zm0 0-8.5 8.5m0 0L7.833 21m-1.416-1.417L5 18.167"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPaddles;
