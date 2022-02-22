import * as React from "react";

const SvgRain = ({ title, titleId, ...props }) => (
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
      id="Rain_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={23}
    >
      <path d="M13.5 12H6L0 23V0h24v23H13.5V12Z" fill="#fff" />
    </mask>
    <g mask="url(#Rain_svg__a)">
      <path
        d="m15.814 9.326-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <path
      d="M11 18.421C11 19.845 9.88 21 8.5 21S6 19.845 6 18.421C6 16.997 8.5 14 8.5 14s2.5 2.997 2.5 4.421Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRain;
