import * as React from "react";

const SvgForbidden = ({ title, titleId, ...props }) => (
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
      d="M18.893 18.893 12 12 5.107 5.107"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18.364 18.364A8.97 8.97 0 0 1 12 21a9 9 0 0 1-9-9 8.969 8.969 0 0 1 2.636-6.364A8.969 8.969 0 0 1 12 3a9 9 0 0 1 9 9 8.97 8.97 0 0 1-2.636 6.364Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgForbidden;
