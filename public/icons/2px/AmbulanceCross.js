import * as React from "react";

const SvgAmbulanceCross = ({ title, titleId, ...props }) => (
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
      d="M6 1v4m0 18v-4M6 5h12M6 5v14M18 1v18m0 4v-4m0 0H6m6-10.5v7M8.5 12h7"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAmbulanceCross;
