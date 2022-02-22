import * as React from "react";

const SvgLaptopLocked = ({ title, titleId, ...props }) => (
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
      d="M24 18H0v2h24v-2ZM4 18h17v-2H4v2ZM2 6v10h2V6H2Zm11-2H4v2h9V4ZM4 6V4a2 2 0 0 0-2 2h2Zm0 10H2a2 2 0 0 0 2 2v-2ZM21 5v2.5h2V5h-2Zm1 1.5h-6v2h6v-2Zm-5 1V5h-2v2.5h2Zm-1-1h-.9v2h.9v-2Zm-2 1.1V12h2V7.6h-2Zm2 6.4h6v-2h-6v2Zm8-2V7.6h-2V12h2Zm-1.1-5.5H22v2h.9v-2ZM24 7.6a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2Zm-8.9-1.1A1.1 1.1 0 0 0 14 7.6h2a.9.9 0 0 1-.9.9v-2ZM22 14a2 2 0 0 0 2-2h-2v2ZM19 3a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Zm-5 9a2 2 0 0 0 2 2v-2h-2Zm5-11a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2V1Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLaptopLocked;
