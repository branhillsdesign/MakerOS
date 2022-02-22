import * as React from "react";

const SvgMissedCall = ({ title, titleId, ...props }) => (
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
    <path
      d="M7.945 12.832A10.092 10.092 0 0 0 2.5 18.5l2.333 2.427a.1.1 0 0 0 .142.002l2.94-2.9a.1.1 0 0 0 .03-.07v-5.127Zm0 0A10.224 10.224 0 0 1 12 12c1.442 0 2.813.297 4.055.832m0 0A10.092 10.092 0 0 1 21.5 18.5l-2.333 2.427a.1.1 0 0 1-.142.002l-2.94-2.9a.1.1 0 0 1-.03-.07v-5.127Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M4 5V0h5L4 5Z" fill="currentColor" />
    <path d="m5 1 7 7 7-7" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgMissedCall;
