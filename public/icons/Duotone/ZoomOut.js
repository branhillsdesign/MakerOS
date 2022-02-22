import * as React from "react";

const SvgZoomOut = ({ title, titleId, ...props }) => (
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
    <path d="m14 14 6 6" stroke="#555770" strokeWidth={2} />
    <circle cx={9.5} cy={9.5} r={5.5} stroke="#555770" strokeWidth={2} />
    <path d="M7 9.5h5" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgZoomOut;
