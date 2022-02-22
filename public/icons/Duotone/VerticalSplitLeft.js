import * as React from "react";

const SvgVerticalSplitLeft = ({ title, titleId, ...props }) => (
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
      d="M21 6h-8m8 4h-8m8 4h-8m8 4h-8"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M10 18V6H4v12h6Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgVerticalSplitLeft;
