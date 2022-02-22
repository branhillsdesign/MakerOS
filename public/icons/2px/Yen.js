import * as React from "react";

const SvgYen = ({ title, titleId, ...props }) => (
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
      id="Yen_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={4}
      y={4}
      width={16}
      height={17}
    >
      <path fill="#fff" d="M4 4h16v17H4z" />
    </mask>
    <g mask="url(#Yen_svg__a)">
      <path
        d="m6 3 6 8.5M18.5 3 12 11.5m0 9.5v-5m0 0h6m-6 0H6m6 0v-3.5m0-1v1m-6 0h6m6 0h-6"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgYen;
