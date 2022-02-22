import * as React from "react";

const SvgTimelapse = ({ title, titleId, ...props }) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M12 19a7 7 0 1 0 0-14v7l-5 4.899A6.98 6.98 0 0 0 12 19Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTimelapse;
