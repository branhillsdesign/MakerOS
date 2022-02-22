import * as React from "react";

const SvgCrop = ({ title, titleId, ...props }) => (
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
      d="M6 6h12v12M6 6v12h12M6 6H2m4 0V2m12 16v4m0-4h4"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCrop;
