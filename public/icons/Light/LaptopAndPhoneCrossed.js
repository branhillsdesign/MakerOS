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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Laptop_and_Phone_Crossed_svg__a)">
      <path d="M2.5 3 21 21.5" stroke="#555770" strokeWidth={1.5} />
      <path d="M13.5 17.4H0v1.2h13.5v-1.2Z" fill="#555770" />
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
        <path d="M1 19.5V3h22v3.5h-9.5v13H1Z" fill="#fff" />
      </mask>
      <g mask="url(#Laptop_and_Phone_Crossed_svg__b)">
        <path
          d="M20 5v-.6.6Zm0-.6H4v1.2h16V4.4ZM2.4 6v10h1.2V6H2.4ZM4 17.6h16v-1.2H4v1.2ZM20.4 6v10h1.2V6h-1.2ZM20 17.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM4 4.4A1.6 1.6 0 0 0 2.4 6h1.2c0-.22.18-.4.4-.4V4.4Zm16 1.2c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 20 4.4v1.2ZM2.4 16A1.6 1.6 0 0 0 4 17.6v-1.2a.4.4 0 0 1-.4-.4H2.4Z"
          fill="#555770"
        />
      </g>
      <path
        d="M18.4 9v.6V9Zm1.2 0v.6V9ZM17 20.6h4v-1.2h-4v1.2Zm5.6-1.6v-9h-1.2v9h1.2Zm-7.2-9v9h1.2v-9h-1.2Zm3-1.6H17v1.2h1.4V8.4Zm2.6 0h-1.4v1.2H21V8.4Zm-1.4 0h-1.2v1.2h1.2V8.4Zm3 1.6A1.6 1.6 0 0 0 21 8.4v1.2c.22 0 .4.18.4.4h1.2ZM21 20.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm-4-1.2a.4.4 0 0 1-.4-.4h-1.2a1.6 1.6 0 0 0 1.6 1.6v-1.2Zm-.4-9.4c0-.22.18-.4.4-.4V8.4a1.6 1.6 0 0 0-1.6 1.6h1.2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgLaptopandPhoneCrossed;
