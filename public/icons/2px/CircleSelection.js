import * as React from "react";

const SvgCircleSelection = ({ title, titleId, ...props }) => (
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
      d="M11 3.055a8.957 8.957 0 0 0-4.617 1.912M13 3.055a8.957 8.957 0 0 1 4.616 1.912M4.964 6.387A8.957 8.957 0 0 0 3.054 11m0 2a8.957 8.957 0 0 0 1.912 4.616m1.421 1.42A8.958 8.958 0 0 0 11 20.946m2 0a8.957 8.957 0 0 0 4.612-1.91m1.421-1.42A8.958 8.958 0 0 0 20.945 13m0-2a8.958 8.958 0 0 0-1.912-4.616"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCircleSelection;
