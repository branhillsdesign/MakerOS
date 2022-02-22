import * as React from "react";

const SvgLoading02 = ({ title, titleId, ...props }) => (
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
      id="Loading_02_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M0 12h6v2H0v10h24V12h-6v-2h6V0H0v12Z" fill="#fff" />
    </mask>
    <g mask="url(#Loading_02_svg__a)" stroke="#555770" strokeWidth={1.2}>
      <path d="M20 12a8 8 0 0 1-13.994 5.299M4 12a8 8 0 0 1 14.11-5.163" />
      <path d="M20.4 9.4h-4.951L20.4 4.449V9.4ZM3.6 14.6h4.951L3.6 19.552V14.6Z" />
    </g>
  </svg>
);

export default SvgLoading02;
