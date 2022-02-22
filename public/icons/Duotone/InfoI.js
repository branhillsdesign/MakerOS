import * as React from "react";

const SvgInfoi = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={10} stroke="#555770" strokeWidth={2} />
    <path d="M12 6v2m-3 3h3v6h3" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgInfoi;
