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
    <path d="M13 19H0" stroke="currentColor" strokeWidth={2} />
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
  </svg>
);

export default SvgLaptopandPhone;
