import * as React from "react";

const SvgFastBackward = ({ title, titleId, ...props }) => (
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
      d="M2.897 12 11.4 4.347v15.306L2.897 12ZM12.897 12 21.4 4.347v15.306L12.897 12Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgFastBackward;
