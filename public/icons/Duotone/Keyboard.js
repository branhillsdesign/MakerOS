import * as React from "react";

const SvgKeyboard = ({ title, titleId, ...props }) => (
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
      d="M8 15h8M5 9h2m-2 3h2m1-3h2m-2 3h2m1 0h2m-2-3h2m1 0h2m-2 3h2m1-3h2m-2 3h2"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgKeyboard;
