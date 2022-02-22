import * as React from "react";

const SvgTent = ({ title, titleId, ...props }) => (
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
      d="M15 1 3 22h5l4-7.5 4 7.5h5L9 1"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M15 1 3 22h4.403M9 1l12 21h-4.398"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTent;
