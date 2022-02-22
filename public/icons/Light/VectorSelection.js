import * as React from "react";

const SvgVectorSelection = ({ title, titleId, ...props }) => (
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
      d="M7 5V3H3v4h2m2-2v2H5m2-2h10M5 7v10m0 0H3v4h4v-2m-2-2h2v2m0 0h10m0 0v2h4v-4h-2m-2 2v-2h2m0 0V7m0 0h2V3h-4v2m2 2h-2V5"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgVectorSelection;
