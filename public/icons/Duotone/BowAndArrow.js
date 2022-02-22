import * as React from "react";

const SvgBowandArrow = ({ title, titleId, ...props }) => (
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
      d="m21 3-1.5.5 1 1L21 3Zm0 0L6 18m-3 3 1-1m0 0H3l2-2h1m-2 2 2-2m-2 2v1l2-2v-1"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path d="M2.5 2v18M22 21.5H4" stroke="currentColor" />
    <path
      d="M2 1c0 1.6 1.333 2 2 2 9.389 0 17 7.611 17 17 0 1 .4 2 2 2"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBowandArrow;
