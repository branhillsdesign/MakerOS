import * as React from "react";

const Svg360 = ({ title, titleId, ...props }) => (
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
    <mask id="360_svg__a" fill="#fff">
      <path d="m9 12 4 4-4 4v-8Z" />
    </mask>
    <path
      d="m13 16 .848.849.85-.849-.85-.848L13 16Zm-4-4 .849-.848L7.8 9.102V12H9Zm0 8H7.8v2.897l2.049-2.048L9 20Zm4.848-4.848-4-4-1.697 1.697 4 4 1.697-1.697ZM7.8 12v8h2.4v-8H7.8Zm2.049 8.849 4-4-1.697-1.697-4 4 1.697 1.697Z"
      fill="#555770"
      mask="url(#360_svg__a)"
    />
    <mask
      id="360_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={6}
      width={22}
      height={13}
    >
      <path d="M9.5 19v-5H16v5h7V6H1v13h8.5Z" fill="#fff" />
    </mask>
    <g mask="url(#360_svg__b)">
      <path
        d="M21.4 12c0 1.031-.851 2.126-2.597 2.999-1.71.855-4.115 1.401-6.803 1.401-2.688 0-5.093-.546-6.803-1.401C3.451 14.126 2.6 13.03 2.6 12c0-1.031.851-2.126 2.597-2.999C6.907 8.146 9.312 7.6 12 7.6c2.688 0 5.093.546 6.803 1.401C20.549 9.874 21.4 10.97 21.4 12Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default Svg360;
