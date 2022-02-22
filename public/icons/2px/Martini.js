import * as React from "react";

const SvgMartini = ({ title, titleId, ...props }) => (
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
      d="M6 20h6m6 0h-6m0 0v-7m0 0L7 8m5 5 5-5M7 8 4 5V4h16v1l-3 3M7 8h10"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMartini;
