import * as React from "react";

const SvgManHandsDown = ({ title, titleId, ...props }) => (
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
      d="M7.5 8v7m3 7V9H12m1.5 13V9H12m4.5-1v7M12 15V9m1-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgManHandsDown;
