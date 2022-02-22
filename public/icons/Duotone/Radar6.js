import * as React from "react";

const SvgRadar6 = ({ title, titleId, ...props }) => (
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
      id="Radar_6_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path d="M22 22H12v-7.5l-1.85-.65L2 22V2h20v20Z" fill="#fff" />
    </mask>
    <g mask="url(#Radar_6_svg__a)" strokeWidth={2}>
      <circle cx={12} cy={12} r={9} stroke="#555770" />
      <circle cx={12} cy={12} r={5} stroke="currentColor" />
      <circle cx={12} cy={12} r={1} stroke="#555770" />
    </g>
  </svg>
);

export default SvgRadar6;
