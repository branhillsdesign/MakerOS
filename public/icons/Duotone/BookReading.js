import * as React from "react";

const SvgBookReading = ({ title, titleId, ...props }) => (
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
      d="M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M21 19.4V9c-5.21 0-9 2.6-9 2.6S8.21 9 3 9v10.4c5.21 0 9 2.6 9 2.6s3.79-2.6 9-2.6Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBookReading;
