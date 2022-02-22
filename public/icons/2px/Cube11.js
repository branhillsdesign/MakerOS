import * as React from "react";

const SvgCube11 = ({ title, titleId, ...props }) => (
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
    <rect
      x={4}
      y={4}
      width={16}
      height={16}
      rx={1}
      stroke="#555770"
      strokeWidth={2}
    />
    <circle cx={16.5} cy={16.5} r={1.5} fill="#555770" />
    <circle cx={7.5} cy={7.5} r={1.5} fill="#555770" />
  </svg>
);

export default SvgCube11;
