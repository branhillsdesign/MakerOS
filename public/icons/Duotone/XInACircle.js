import * as React from "react";

const SvgXinaCircle = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="m16 8-4 4m0 0-4 4m4-4 4 4m-4-4L8 8"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgXinaCircle;
