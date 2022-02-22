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
    <g mask="url(#Yen_svg__a)" strokeWidth={2}>
      <path d="m6 3 6 8.5M18.5 3 12 11.5m0 9.5v-9.5" stroke="#555770" />
      <path d="M18 16H6m0-3.5h12" stroke="currentColor" />
    </g>
  </svg>
);

export default SvgYen;
