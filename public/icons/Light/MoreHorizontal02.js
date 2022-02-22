import * as React from "react";

const SvgMoreHorizontal02 = ({ title, titleId, ...props }) => (
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
      d="M6.4 12a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Zm8 0a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Zm8 0a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgMoreHorizontal02;
