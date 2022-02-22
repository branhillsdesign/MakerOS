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
      d="M9 7.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm0 6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm0 6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm6-12a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm0 6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm0 6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgDragDots;
