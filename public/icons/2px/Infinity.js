import * as React from "react";

const SvgInfinity = ({ title, titleId, ...props }) => (
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
      d="M9.835 10.424 8.67 9.306a4.5 4.5 0 1 0-.077 6.463l6.737-6.463a4.5 4.5 0 1 1 .077 6.463l-1.235-1.185"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgInfinity;
