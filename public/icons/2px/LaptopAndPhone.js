import * as React from "react";

const SvgLaptopandPhone = ({ title, titleId, ...props }) => (
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
    <path d="M13 18H0v2h13v-2Z" fill="#555770" />
    <mask
      id="Laptop_and_Phone_svg__a"
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
    <g mask="url(#Laptop_and_Phone_svg__a)">
      <path
        d="M20 5V4v1Zm0-1H4v2h16V4ZM2 6v10h2V6H2Zm2 12h16v-2H4v2ZM20 6v10h2V6h-2Zm0 12a2 2 0 0 0 2-2h-2v2ZM4 4a2 2 0 0 0-2 2h2V4Zm16 2h2a2 2 0 0 0-2-2v2ZM2 16a2 2 0 0 0 2 2v-2H2Z"
        fill="#555770"
      />
    </g>
    <path
      d="M18.4 9v1-1Zm1.2 0v1-1ZM17 21h4v-2h-4v2Zm6-2v-9h-2v9h2Zm-8-9v9h2v-9h-2Zm3.4-2H17v2h1.4V8ZM21 8h-1.4v2H21V8Zm-1.4 0h-1.2v2h1.2V8Zm3.4 2a2 2 0 0 0-2-2v2h2Zm-2 11a2 2 0 0 0 2-2h-2v2Zm-4-2h-2a2 2 0 0 0 2 2v-2Zm0-9V8a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLaptopandPhone;
