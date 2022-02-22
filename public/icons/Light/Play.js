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
      d="M18.946 12 7.6 4.145v15.71L18.946 12Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgPlay;
