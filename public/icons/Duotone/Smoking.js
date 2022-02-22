import * as React from "react";

const SvgSmoking = ({ title, titleId, ...props }) => (
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
    <path d="M3 18v-1h13v1H3Z" stroke="#555770" strokeWidth={2} />
    <path
      d="M19 16v3m2.5-3v3m0-4v-2a5 5 0 0 0-5-5h.25a2.75 2.75 0 1 0 0-5.5h-.25M19 15v-1a3 3 0 0 0-3-3h-1.5a2.5 2.5 0 0 1 0-5"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgSmoking;
