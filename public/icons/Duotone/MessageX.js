import * as React from "react";

const SvgMessageX = ({ title, titleId, ...props }) => (
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
      d="M20 4H4a1 1 0 0 0-1 1v14.792a.1.1 0 0 0 .162.078L6.75 17H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m15 7.5-6 6m0-6 6 6" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgMessageX;
