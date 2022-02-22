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
      d="M12 5.132 20.918 19.4H3.082L12 5.132Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgTriangleUp;
