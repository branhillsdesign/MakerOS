import * as React from "react";

const SvgCdWarning = ({ title, titleId, ...props }) => (
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
    <path d="M19 7v8m0 3v-1.5" stroke="#555770" strokeWidth={1.2} />
    <mask
      id="CD_Warning_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={24}
    >
      <path d="M16 0H0v24h20v-4.5h-3.5V5H19V0h-3Z" fill="#fff" />
    </mask>
    <g mask="url(#CD_Warning_svg__a)" stroke="#555770" strokeWidth={1.2}>
      <circle cx={12} cy={12} r={9.4} />
      <circle cx={12} cy={12} r={2.4} />
    </g>
  </svg>
);

export default SvgCdWarning;
