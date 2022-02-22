import * as React from "react";

const SvgTarget5 = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Target_5_svg__a)">
      <path
        d="M21.818 12H24m-12 9.818V24M2.182 12H0m12-9.818V0"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <circle cx={12} cy={12} r={3} fill="currentColor" />
    </g>
    <defs>
      <clipPath id="Target_5_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTarget5;
