import * as React from "react";

const SvgSunnywithSnow = ({ title, titleId, ...props }) => (
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
      id="Sunny_with_Snow_svg__a"
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
    <g mask="url(#Sunny_with_Snow_svg__a)">
      <path
        d="M8.5 18a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558l-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <path
      d="m11.5 15.313-6 4.374m0-4.375 6 4.376M8.5 14v7"
      stroke="#555770"
      strokeWidth={1.5}
    />
    <path
      d="M20.243 9.757 22 8l-1.757-1.757V3.757h-2.486L16 2l-1.757 1.757h-2.486v2.486"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSunnywithSnow;
