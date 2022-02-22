import * as React from "react";

const SvgHeadsetCrossed = ({ title, titleId, ...props }) => (
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
      id="Headset_Crossed_svg__a"
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
        d="M21 20.997 0 0v24h24V0H5.698v2.866L22.5 19.668 21 20.997Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Headset_Crossed_svg__a)" strokeWidth={2}>
      <path
        d="M4 10a8 8 0 1 1 16 0v6.276a2 2 0 0 1-.57 1.398l-3.642 3.724a2 2 0 0 1-1.43.602H12"
        stroke="currentColor"
      />
      <path
        d="M2 11h2v4H2v-4Zm18 0h2v4h-2v-4Zm-9 10h2v1h-2v-1ZM2.583 4 20 21.417"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgHeadsetCrossed;
