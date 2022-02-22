import * as React from "react";

const SvgTarget02 = ({ title, titleId, ...props }) => (
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
      d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9h3m-12 9a9 9 0 0 1-9-9m9 9v3M3 12a9 9 0 0 1 9-9m-9 9H0m12-9V0"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <circle cx={12} cy={12} r={2.4} stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgTarget02;
