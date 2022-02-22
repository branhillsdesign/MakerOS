import * as React from "react";

const SvgVignette = ({ title, titleId, ...props }) => (
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
      d="M2 19V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 7c3.866 0 7 2.239 7 5s-3.134 5-7 5-7-2.239-7-5 3.134-5 7-5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVignette;
