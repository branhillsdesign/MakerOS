import * as React from "react";

const SvgArrowDownInaCircle = ({ title, titleId, ...props }) => (
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
    <circle
      cx={12}
      cy={12}
      r={10}
      transform="rotate(-180 12 12)"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m7 10.5 5 5 5-5H7Z" fill="currentColor" />
  </svg>
);

export default SvgArrowDownInaCircle;
