import * as React from "react";

const SvgIndentTextLeft = ({ title, titleId, ...props }) => (
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
    <path d="M8 16V8l-4 4 4 4Z" fill="currentColor" />
    <path
      d="M4 6h16m-10 4h10m-10 4h10M4 18h16"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgIndentTextLeft;
