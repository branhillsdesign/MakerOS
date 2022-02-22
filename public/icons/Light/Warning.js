import * as React from "react";

const SvgWarning = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={10.4} stroke="#555770" strokeWidth={1.2} />
    <path d="M12 6.5v8m0 3V16" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgWarning;
