import * as React from "react";

const SvgSignalWarning = ({ title, titleId, ...props }) => (
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
    <path d="M21 11v7m0 4v-2" stroke="#555770" strokeWidth={2} />
    <mask
      id="Signal_Warning_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={22}
      height={24}
    >
      <path d="M16 0H0v24h18V9h4V0h-6Z" fill="#fff" />
    </mask>
    <g mask="url(#Signal_Warning_svg__a)">
      <path d="M21 19H4.72L21 5.162V19Z" stroke="#555770" strokeWidth={2} />
      <path d="M2 20 16.118 8v12H2Z" fill="#555770" />
    </g>
  </svg>
);

export default SvgSignalWarning;
