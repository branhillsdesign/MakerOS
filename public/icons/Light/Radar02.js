import * as React from "react";

const SvgRadar02 = ({ title, titleId, ...props }) => (
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
      id="Radar_02_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path d="M2 2h10v7.5l1.85.65L22 2v20H2V2Z" fill="#fff" />
    </mask>
    <g mask="url(#Radar_02_svg__a)" stroke="#555770" strokeWidth={1.2}>
      <circle cx={12} cy={12} r={9.4} />
      <circle cx={12} cy={12} r={5.4} />
      <circle cx={12} cy={12} r={1.4} />
    </g>
    <path
      d="M12 11V2"
      stroke="#555770"
      strokeWidth={1.2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgRadar02;
