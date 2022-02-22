import * as React from "react";

const SvgLaptopandPhoneCrossed = ({ title, titleId, ...props }) => (
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
      id="Laptop_and_Phone_Crossed_svg__a"
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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v2.866L23 20.168 21.503 21.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Laptop_and_Phone_Crossed_svg__a)">
      <path d="M13 19H0" stroke="currentColor" strokeWidth={2} />
      <mask
        id="Laptop_and_Phone_Crossed_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={3}
        width={22}
        height={17}
      >
        <path d="M1 19.5V3h22v3h-4v2h-6v11.5H1Z" fill="#fff" />
      </mask>
      <g mask="url(#Laptop_and_Phone_Crossed_svg__b)">
        <path
          d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          stroke="#555770"
          strokeWidth={2}
        />
      </g>
      <path
        d="M21 20h-4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1H21a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path d="M2.583 4 21 22.417" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgLaptopandPhoneCrossed;
