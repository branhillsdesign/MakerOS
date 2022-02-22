import * as React from "react";

const SvgSwitchCamera = ({ title, titleId, ...props }) => (
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
      d="M2 7a1 1 0 0 1 1-1h3.586a1 1 0 0 0 .707-.293l1.414-1.414A1 1 0 0 1 9.414 4h5.172a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H21a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8 12v-1l-1 1 1 1v-1Zm0 0h8m0 0v-1l1 1-1 1v-1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSwitchCamera;
