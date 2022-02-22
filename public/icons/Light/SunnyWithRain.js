import * as React from "react";

const SvgSunnywithRain = ({ title, titleId, ...props }) => (
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
      id="Sunny_with_Rain_svg__a"
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
    <g mask="url(#Sunny_with_Rain_svg__a)">
      <path
        d="M8.5 18.4a6.9 6.9 0 1 1 6.263-9.8c.158.34.555.495.9.356l-.224-.557.225.557A4.9 4.9 0 1 1 17.5 18.4h-9Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <path
      d="M11 18.421C11 19.845 9.88 21 8.5 21S6 19.845 6 18.421C6 16.997 8.5 14 8.5 14s2.5 2.997 2.5 4.421ZM20.243 9.757 22 8l-1.757-1.757V3.757h-2.486L16 2l-1.757 1.757h-2.486V5.5"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgSunnywithRain;
