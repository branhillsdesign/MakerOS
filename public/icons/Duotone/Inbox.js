import * as React from "react";

const SvgInbox = ({ title, titleId, ...props }) => (
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
      d="M15 14c0 .35-.06.687-.17 1m0 0a3.001 3.001 0 0 1-5.66 0m5.66 0H20M9.17 15c-.11-.313-.17-.65-.17-1m.17 1H4"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgInbox;
