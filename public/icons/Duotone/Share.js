import * as React from "react";

const SvgShare = ({ title, titleId, ...props }) => (
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
      d="m14.683 7.264-6.5 3.545m6.5 5.928-6.5-3.546"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M19 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShare;
