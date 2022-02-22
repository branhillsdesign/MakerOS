import * as React from "react";

const SvgCar = ({ title, titleId, ...props }) => (
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
      d="m4.333 11 1.553-4.658A.5.5 0 0 1 6.36 6h11.28a.5.5 0 0 1 .474.342L19.667 11M4.333 11 4 12v7.8c0 .11.09.2.2.2h.6a.2.2 0 0 0 .2-.2V18h14v1.8c0 .11.09.2.2.2h.6a.2.2 0 0 0 .2-.2V12l-.333-1M4.333 11h15.334"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCar;
