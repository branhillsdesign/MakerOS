import * as React from "react";

const SvgLaundry = ({ title, titleId, ...props }) => (
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
      d="M5 20V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8 14a4 4 0 0 1 4-4m-4 4c0 .729.195 1.412.535 2M8 14l4-4m0 0c.729 0 1.412.195 2 .535m0 0A4 4 0 1 1 8.535 16M14 10.535 8.535 16"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLaundry;
