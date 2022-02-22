import * as React from "react";

const SvgNightwithRain = ({ title, titleId, ...props }) => (
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
      id="Night_with_Rain_svg__a"
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
    <g mask="url(#Night_with_Rain_svg__a)">
      <path
        d="M8.5 18.4a6.9 6.9 0 1 1 6.263-9.8c.158.34.555.495.9.356l-.224-.557.225.557A4.9 4.9 0 1 1 17.5 18.4h-9Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <path
      d="M11 18.421C11 19.845 9.88 21 8.5 21S6 19.845 6 18.421C6 16.997 8.5 14 8.5 14s2.5 2.997 2.5 4.421Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="m17.315 2.066.208-.563-.208.563Zm-.505 1.703c0-.491-.07-.965-.2-1.412l1.152-.335c.162.555.248 1.141.248 1.747h-1.2Zm3.59 3.59c0-2.17-1.37-4.02-3.293-4.73l.416-1.126A6.244 6.244 0 0 1 21.6 7.359h-1.2Zm-6.19.822a5.04 5.04 0 0 0 2.6-4.412h1.2a6.24 6.24 0 0 1-3.22 5.462l-.58-1.05Zm5.605 1.538a5.016 5.016 0 0 0 .585-2.36h1.2c0 1.054-.262 2.05-.725 2.922l-1.06-.562ZM16.61 2.357c-.15-.514.337-1.067.913-.854l-.416 1.125c.421.156.759-.25.655-.606l-1.152.335Z"
      fill="#555770"
    />
  </svg>
);

export default SvgNightwithRain;
