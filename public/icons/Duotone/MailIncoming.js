import * as React from "react";

const SvgMailIncoming = ({ title, titleId, ...props }) => (
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
    <path d="m2 6 10 6 10-6" stroke="#555770" strokeWidth={2} />
    <path
      d="M22 11.5V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M23 17h-8m0 0 3-3m-3 3 3 3"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMailIncoming;
