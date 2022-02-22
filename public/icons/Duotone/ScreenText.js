import * as React from "react";

const SvgScreenText = ({ title, titleId, ...props }) => (
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
      d="M6 9h12M6 13h10M7 20h5m5 0h-5m0 0v-3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgScreenText;
