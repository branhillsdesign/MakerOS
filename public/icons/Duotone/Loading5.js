import * as React from "react";

const SvgLoading5 = ({ title, titleId, ...props }) => (
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
      id="Loading_5_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M0 12h6v2H0v10h24V12h-6v-2h6V0H0v12Z" fill="#fff" />
    </mask>
    <g mask="url(#Loading_5_svg__a)">
      <circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={2} />
      <path d="M14 10h7V3l-7 7ZM10 14H3v7l7-7Z" fill="#555770" />
    </g>
  </svg>
);

export default SvgLoading5;
