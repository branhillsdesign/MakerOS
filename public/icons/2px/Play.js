import * as React from "react";

const SvgPlay = ({ title, titleId, ...props }) => (
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
      d="M18.243 12 8 4.909V19.09L18.243 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPlay;
