import * as React from "react";

const SvgCandyCane = ({ title, titleId, ...props }) => (
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
      d="M8.46 16.69v4.5m4-20.145v3.23m0 8.348v4.5m4-15.194v11.035"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      clipRule="evenodd"
      d="M15.415 5.116a3.09 3.09 0 0 0-4.352-.071.103.103 0 0 1-.144-.001L8.847 2.935a.099.099 0 0 1 0-.14 6.185 6.185 0 0 1 3.613-1.75 6.172 6.172 0 0 1 5.167 1.82c2.444 2.487 2.444 6.518 0 9.005l-5.167 5.254-4 4.067-1.217 1.236a.1.1 0 0 1-.142 0L5.029 20.32a.1.1 0 0 1 0-.14l3.43-3.489 4-4.067 2.956-3.005a3.223 3.223 0 0 0 0-4.502Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCandyCane;
