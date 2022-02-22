import * as React from "react";

const SvgStore01 = ({ title, titleId, ...props }) => (
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
      d="M4 4.5h16M5 13H4v-1l1-4h14l1 4.5v.5h-1M5 13v6h8v-6m-8 0h8m0 0h6m0 0v7"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgStore01;
