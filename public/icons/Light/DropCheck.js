import * as React from "react";

const SvgDropCheck = ({ title, titleId, ...props }) => (
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
      d="M19 15a7 7 0 1 1-14 0c0-3.866 7-12 7-12s7 8.134 7 12Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="m8.5 14.5 2.563 2.5 4.437-4.5"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgDropCheck;
