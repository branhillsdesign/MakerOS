import * as React from "react";

const SvgVectorCurve = ({ title, titleId, ...props }) => (
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
      d="M5 8.5h5.5v.189A6.004 6.004 0 0 0 6.02 14H6m13-5.5h-5.5v.189A6.004 6.004 0 0 1 17.98 14H18"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM22 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19.5 15.5a1.5 1.5 0 1 1-1.52-1.5H18a1.5 1.5 0 0 1 1.5 1.5ZM7.5 15.5A1.5 1.5 0 1 1 6 14h.02a1.5 1.5 0 0 1 1.48 1.5ZM10.5 7v3h3V7h-3Z"
      stroke="#555770"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgVectorCurve;
