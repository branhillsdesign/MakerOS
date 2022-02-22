import * as React from "react";

const SvgSnowwithThunder = ({ title, titleId, ...props }) => (
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
      id="Snow_with_Thunder_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={23}
    >
      <path
        d="M13.5 12H6L0 23V0h15l-5 11.5h4.5v5h2L24 9v14H13.5V12Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Snow_with_Thunder_svg__a)">
      <path
        d="m15.814 9.326-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <path
      d="m11.5 15.313-6 4.374m0-4.375 6 4.376M8.5 14v7"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M14 9.429 16.737 3h4.123l-2.737 4.286H22L14.474 15l2.28-5.571H14Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSnowwithThunder;
