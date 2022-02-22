import * as React from "react";

const SvgIncandescentWhiteBalance = ({ title, titleId, ...props }) => (
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
      d="M12 17a5 5 0 0 0 2-9.584V3h-4v4.416A5.001 5.001 0 0 0 12 17Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M4 12H1m11 8v3m8-11h3m-5 6 2 2M6 18l-2 2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgIncandescentWhiteBalance;
