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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Sim_Card_Crossed_svg__a)">
      <path d="M2.5 3 21 21.5" stroke="#555770" strokeWidth={1.5} />
      <path
        d="M19 7h.6a.6.6 0 0 0-.176-.424L19 7Zm-4-4 .424-.424A.6.6 0 0 0 15 2.4V3ZM6 21.6h12v-1.2H6v1.2ZM4.4 4v16h1.2V4H4.4Zm15.2 16V7h-1.2v13h1.2ZM15 2.4H6v1.2h9V2.4Zm4.424 4.176-4-4-.848.848 4 4 .848-.848ZM12.6 15v-4h-1.2v4h1.2Zm0 3v-2h-1.2v2h1.2Zm-3-5v-2H8.4v2h1.2Zm0 5v-4H8.4v4h1.2Zm6-5v-2h-1.2v2h1.2Zm0 5v-4h-1.2v4h1.2Zm2.4 3.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM6 20.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 21.6v-1.2ZM5.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 4.4 4h1.2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgSimCardCrossed;
