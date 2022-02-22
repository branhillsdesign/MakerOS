import * as React from "react";

const SvgBaloon = ({ title, titleId, ...props }) => (
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
      d="M12 14c-.655.748-1.57 2.42 0 4.5s.654 3.99 0 4.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M17 7.25c0 2.9-2.239 6.75-5 6.75s-5-3.85-5-6.75S9.239 2 12 2s5 2.35 5 5.25Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBaloon;
