import * as React from "react";

const SvgCheckinaCircle = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path d="m7 12 3.438 3L17 8.5" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgCheckinaCircle;
