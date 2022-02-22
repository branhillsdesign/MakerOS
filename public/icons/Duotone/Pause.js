import * as React from "react";

const SvgPause = ({ title, titleId, ...props }) => (
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
    <path d="M5 19V5h5v14H5Z" stroke="#555770" strokeWidth={2} />
    <path d="M14 19V5h5v14h-5Z" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgPause;
