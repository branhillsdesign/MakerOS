import * as React from "react";

const SvgPuzzle = ({ title, titleId, ...props }) => (
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
      d="M12 8a3 3 0 0 0 3-3h4v4a3 3 0 1 1 0 6v4h-4a3 3 0 1 0-6 0H5v-4a3 3 0 1 1 0-6V5h4a3 3 0 0 0 3 3Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPuzzle;
