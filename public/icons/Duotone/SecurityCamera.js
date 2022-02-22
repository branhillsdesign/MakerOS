import * as React from "react";

const SvgSecurityCamera = ({ title, titleId, ...props }) => (
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
      d="M15.892 12.062a2.5 2.5 0 0 1-.915 3.415m0 0a2.5 2.5 0 0 1-3.415-.915m3.415.915-.049 5.492 6.946.031"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6.915 15.513 5.5 18.063 2 12l2.915.049m2 3.464-2-3.464m2 3.464.75 1.3 13.424-7.75L17.588 3 4.165 10.75l.75 1.299"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSecurityCamera;
