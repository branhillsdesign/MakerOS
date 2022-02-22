import * as React from "react";

const SvgDragDots = ({ title, titleId, ...props }) => (
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
      d="M10 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDragDots;
