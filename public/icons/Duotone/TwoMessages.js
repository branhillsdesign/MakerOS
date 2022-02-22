import * as React from "react";

const SvgTwoMessages = ({ title, titleId, ...props }) => (
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
      d="M20 6h2a1 1 0 0 1 1 1v14.792a.1.1 0 0 1-.163.078L19.25 19H6a1 1 0 0 1-1-1v-2"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18 2H2a1 1 0 0 0-1 1v14.792a.1.1 0 0 0 .162.078L4.75 15H18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTwoMessages;
