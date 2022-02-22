import * as React from "react";

const SvgStop = ({ title, titleId, ...props }) => (
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
      d="M21.4 12a9.4 9.4 0 1 1-18.8 0 9.4 9.4 0 1 1 18.8 0ZM7 12.6h10v-1.2H7v1.2Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgStop;
