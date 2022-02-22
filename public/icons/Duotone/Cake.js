import * as React from "react";

const SvgCake = ({ title, titleId, ...props }) => (
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
    <path d="m2 12.4 20 1.8" stroke="currentColor" strokeWidth={2} />
    <path
      d="M2 8.2 10 5l12 5M2 8.2 22 10M2 8.2v9L22 19v-9"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCake;
