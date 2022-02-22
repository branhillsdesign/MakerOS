import * as React from "react";

const SvgSledges = ({ title, titleId, ...props }) => (
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
    <path d="M12 9v5H6V9M2 9h14" stroke="currentColor" strokeWidth={2} />
    <path
      d="M20 10c0 3.2-2.667 4-4 4H3v1h13c4 0 5-3.333 5-5h-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSledges;
