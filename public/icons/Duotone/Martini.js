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
    <path d="M7 8h10" stroke="currentColor" strokeWidth={2} />
    <path
      d="M6 20h6m6 0h-6m0 0v-7m0 0L7 8 4 5V4h16v1l-3 3-5 5Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMartini;
