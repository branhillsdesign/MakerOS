import * as React from "react";

const SvgFridge = ({ title, titleId, ...props }) => (
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
      d="M5 10V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10M5 10h14"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M9 5v3m0 4v5" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgFridge;
