import * as React from "react";

const SvgSimCardCrossed = ({ title, titleId, ...props }) => (
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
      id="Sim_Card_Crossed_svg__a"
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
        d="M22 21.997.003 0 0 24h24V0H5.698v2.866L23.332 20.5 22 21.997Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Sim_Card_Crossed_svg__a)">
      <path d="m2.5 3.917 18.5 18.5" stroke="#555770" strokeWidth={2} />
      <path
        d="M19 7h1a1 1 0 0 0-.293-.707L19 7Zm-4-4 .707-.707A1 1 0 0 0 15 2v1ZM6 22h12v-2H6v2ZM4 4v16h2V4H4Zm16 16V7h-2v13h2ZM15 2H6v2h9V2Zm4.707 4.293-4-4-1.414 1.414 4 4 1.414-1.414ZM13 15v-4h-2v4h2Zm0 3v-2h-2v2h2Zm-3-5v-2H8v2h2Zm0 5v-4H8v4h2Zm6-5v-2h-2v2h2Zm0 5v-4h-2v4h2Zm2 4a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 4V2a2 2 0 0 0-2 2h2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgSimCardCrossed;
