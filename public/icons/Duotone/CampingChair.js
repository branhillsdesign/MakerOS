import * as React from "react";

const SvgCampingChair = ({ title, titleId, ...props }) => (
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
    <path d="M20 11 3 22m1-11 17 11" stroke="currentColor" strokeWidth={2} />
    <path
      d="M4 2s4 1.5 8 1.5S20 2 20 2v9s-4 1.5-8 1.5S4 11 4 11V2Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M2 8h4m12 0h4" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgCampingChair;
