import * as React from "react";

const SvgTextCrossed = ({ title, titleId, ...props }) => (
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
    <mask
      id="Text_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M0 12h24v-2H0V0h24v24H0V12Z" fill="#fff" />
    </mask>
    <g mask="url(#Text_Crossed_svg__a)">
      <path d="M3 14h18v-2H3v2Z" fill="#555770" />
      <path d="M6 6h6m6 0h-6m0 0v14" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgTextCrossed;
