import * as React from "react";

const SvgJoiningArrows6 = ({ title, titleId, ...props }) => (
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
      d="m8 6 4 4m0 0 4-4m-4 4V1M8 18l4-4m0 0 4 4m-4-4v9"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M4 12h16" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgJoiningArrows6;
