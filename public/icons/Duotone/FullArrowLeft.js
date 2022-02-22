import * as React from "react";

const SvgFullArrowLeft = ({ title, titleId, ...props }) => (
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
    <path d="M5.5 12H20" stroke="currentColor" strokeWidth={2} />
    <path d="M11 6.5 5.5 12l5.5 5.5" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgFullArrowLeft;
