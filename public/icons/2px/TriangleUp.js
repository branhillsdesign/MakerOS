import * as React from "react";

const SvgTriangleUp = ({ title, titleId, ...props }) => (
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
      d="M12 5.887 20.196 19H3.804L12 5.887Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTriangleUp;
