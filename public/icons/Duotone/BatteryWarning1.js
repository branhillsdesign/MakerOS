import * as React from "react";

const SvgBatteryWarning1 = ({ title, titleId, ...props }) => (
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
    <path d="M19 7v7m0 4v-2" stroke="currentColor" strokeWidth={2} />
    <mask
      id="Battery_Warning-1_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={24}
    >
      <path d="M16 0H0v24h20v-4h-4V5h3V0h-3Z" fill="#fff" />
    </mask>
    <g mask="url(#Battery_Warning-1_svg__a)">
      <path fill="currentColor" d="M7 9h10v12H7z" />
      <path d="M14 4h3v17H7V4h4V2h2v2h1Z" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgBatteryWarning1;
