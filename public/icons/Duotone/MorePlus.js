import * as React from "react";

const SvgMorePlus = ({ title, titleId, ...props }) => (
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
      d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-10a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMorePlus;
