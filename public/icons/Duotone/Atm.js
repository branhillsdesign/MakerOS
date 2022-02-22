import * as React from "react";

const SvgAtm = ({ title, titleId, ...props }) => (
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
      d="M6.5 14.75v-2.5m-4 2.5v-2.5m0 0v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2.5m-4 0h4m10 2.5v-5a.5.5 0 0 1 .5-.5h2m2.5 5.5v-5a.5.5 0 0 0-.5-.5h-2m0 0v4.5"
      stroke="#555770"
      strokeWidth={1.5}
    />
    <path
      d="M11.5 14.75v-5.5m0 0h-3m3 0h3"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgAtm;
