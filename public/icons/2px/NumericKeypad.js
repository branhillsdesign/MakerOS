import * as React from "react";

const SvgNumericKeypad = ({ title, titleId, ...props }) => (
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
      d="M7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6-11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgNumericKeypad;
