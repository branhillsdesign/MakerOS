import * as React from "react";

const SvgLight = ({ title, titleId, ...props }) => (
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
      d="M21 12a8.97 8.97 0 0 1-2.7 6.427 9.04 9.04 0 0 1-3.6 2.161A8.946 8.946 0 0 1 12 21a9 9 0 1 1 .901-17.956A8.951 8.951 0 0 1 18.3 5.573 8.97 8.97 0 0 1 21 12Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 12a8.97 8.97 0 0 1-2.7 6.427 9.04 9.04 0 0 1-3.6 2.161A8.946 8.946 0 0 1 12 21a9 9 0 1 1 .901-17.956A8.951 8.951 0 0 1 18.3 5.573 8.97 8.97 0 0 1 21 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLight;
