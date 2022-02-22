import * as React from "react";

const SvgBuilding = ({ title, titleId, ...props }) => (
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
      d="M14 23v-5m4-8h4v12h-4v-4h-4m4-8V7m0 3h-4v8m4-5v2"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6 2H2v4m4-4v20H2v-4M6 2h4m0 0h4v4m-4-4v20h4v-4M2 6h12M2 6v4m12-4v4M2 10v4m0-4h12M2 14v4m0-4h12M2 18h12m0-4v-4m0 4v4"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBuilding;
