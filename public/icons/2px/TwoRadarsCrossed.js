import * as React from "react";

const SvgTwoRadarsCrossed = ({ title, titleId, ...props }) => (
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
      id="Two_Radars_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M21.503 21.5.003 0 0 24h24V0H5.698v2.866L23 20.168 21.503 21.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Two_Radars_Crossed_svg__a)">
      <path d="M2.583 4 21 22.417" stroke="#555770" strokeWidth={2} />
      <mask
        id="Two_Radars_Crossed_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={10}
        y={10}
        width={10}
        height={10}
      >
        <path d="M10 10h10v10H10V10Z" fill="#fff" />
      </mask>
      <g
        mask="url(#Two_Radars_Crossed_svg__b)"
        stroke="#555770"
        strokeWidth={2}
      >
        <circle cx={20} cy={20} r={9} transform="rotate(-180 20 20)" />
        <circle cx={20} cy={20} r={5} transform="rotate(-180 20 20)" />
        <circle cx={20} cy={20} r={1} transform="rotate(-180 20 20)" />
      </g>
      <mask
        id="Two_Radars_Crossed_svg__c"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={4}
        width={10}
        height={10}
      >
        <path d="M14 14H4V4h10v10Z" fill="#fff" />
      </mask>
      <g
        mask="url(#Two_Radars_Crossed_svg__c)"
        stroke="#555770"
        strokeWidth={2}
      >
        <circle cx={4} cy={4} r={9} />
        <circle cx={4} cy={4} r={5} />
        <circle cx={4} cy={4} r={1} />
      </g>
    </g>
  </svg>
);

export default SvgTwoRadarsCrossed;
