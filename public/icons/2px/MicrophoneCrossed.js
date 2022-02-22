import * as React from "react";

const SvgMicrophoneCrossed = ({ title, titleId, ...props }) => (
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
      id="Microphone_Crossed_svg__a"
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
        d="M19.784 19.78 4 3.998H0V24h24V0H5.698v2.866l15.5 15.5-1.414 1.415Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Microphone_Crossed_svg__a)">
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" strokeWidth={2} />
      <path
        d="M13 23v-3.454h-2V23h2ZM4 13c0 4.23 3.646 7.546 8 7.546v-2C8.622 18.546 6 16 6 13H4Zm14 0c0 3-2.622 5.546-6 5.546v2c4.354 0 8-3.317 8-7.546h-2Z"
        fill="#555770"
      />
      <path
        d="M15 6v6a3 3 0 1 1-6 0V6a3 3 0 1 1 6 0Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgMicrophoneCrossed;
