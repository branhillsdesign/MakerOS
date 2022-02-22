import * as React from "react";

const SvgTruck = ({ title, titleId, ...props }) => (
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
      d="M16 16v-1.5m0 1.5H7.732M16 16h.268M16 9V5H3a1 1 0 0 0-1 1v10h2.268M16 9h3.5l2.5 3v1m-6-4v4m6 0h-6m6 0v1.5M16 13v1.5m0 0h6m0 0V16h-2.268"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTruck;
