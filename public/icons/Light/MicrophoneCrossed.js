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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Microphone_Crossed_svg__a)">
      <path d="M2.5 3 21 21.5" stroke="#555770" strokeWidth={1.5} />
      <path
        d="M12.6 23v-3.454h-1.2V23h1.2ZM4.4 13c0 3.984 3.441 7.145 7.6 7.145v-1.2c-3.573 0-6.4-2.699-6.4-5.945H4.4Zm14 0c0 3.246-2.827 5.945-6.4 5.945v1.2c4.159 0 7.6-3.161 7.6-7.145h-1.2Z"
        fill="#555770"
      />
      <path
        d="M15.4 6v6a3.4 3.4 0 1 1-6.8 0V6a3.4 3.4 0 1 1 6.8 0Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgMicrophoneCrossed;
