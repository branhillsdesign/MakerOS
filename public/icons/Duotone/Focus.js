import * as React from "react";

const SvgFocus = ({ title, titleId, ...props }) => (
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
      d="M14.7 3H20a1 1 0 0 1 1 1v5.3M14.7 21H20a1 1 0 0 0 1-1v-5.3M3 9.3V4a1 1 0 0 1 1-1h5.3M3 14.7V20a1 1 0 0 0 1 1h5.3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <circle cx={12} cy={12} r={4} stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgFocus;
