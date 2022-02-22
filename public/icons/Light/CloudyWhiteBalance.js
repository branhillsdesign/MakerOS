import * as React from "react";

const SvgCloudyWhiteBalance = ({ title, titleId, ...props }) => (
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
      d="M1 14a5 5 0 0 0 5 5h13a4 4 0 1 0-1.001-7.874L18 11A6 6 0 0 0 6.337 9.011 5 5 0 0 0 1 14Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgCloudyWhiteBalance;
