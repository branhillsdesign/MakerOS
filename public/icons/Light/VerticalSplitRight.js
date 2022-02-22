import * as React from "react";

const SvgVerticalSplitRight = ({ title, titleId, ...props }) => (
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
      d="M3 6h8m-8 4h8m-8 4h8m-8 4h8m3-12v12h6V6h-6Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgVerticalSplitRight;
