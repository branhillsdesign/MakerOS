import * as React from "react";

const SvgForbidden = ({ title, titleId, ...props }) => (
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
      d="m11.576 12.424 6.633 6.634A9.362 9.362 0 0 1 12 21.4 9.4 9.4 0 0 1 2.6 12c0-2.38.884-4.553 2.342-6.21l6.634 6.634ZM5.79 4.942A9.362 9.362 0 0 1 12 2.6a9.4 9.4 0 0 1 9.4 9.4c0 2.38-.884 4.553-2.342 6.21l-6.634-6.634-6.633-6.634Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgForbidden;
