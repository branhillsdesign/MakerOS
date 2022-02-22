import * as React from "react";

const SvgItalic = ({ title, titleId, ...props }) => (
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
      d="M10 6h4m3.5 0H14m0 0-4 13m0 0H6.5m3.5 0h4"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgItalic;
