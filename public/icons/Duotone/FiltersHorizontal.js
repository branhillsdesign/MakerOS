import * as React from "react";

const SvgFiltersHorizontal = ({ title, titleId, ...props }) => (
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
      d="M4 12h12M4 17h2m14 0H8M4 7h4m12 0H10"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M9 15v4m10-9v4m-8-9v4" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgFiltersHorizontal;
