import * as React from "react";

const SvgSkipPrevious = ({ title, titleId, ...props }) => (
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
    <path d="M7 6v12" stroke="currentColor" strokeWidth={2} />
    <path d="M17 16V8l-5.5 4 5.5 4Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgSkipPrevious;
