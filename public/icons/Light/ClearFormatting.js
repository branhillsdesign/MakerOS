import * as React from "react";

const SvgClearFormatting = ({ title, titleId, ...props }) => (
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
      id="Clear_Formatting_svg__a"
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
    <g mask="url(#Clear_Formatting_svg__a)" stroke="#555770">
      <path d="M3.5 4 20 20.5" strokeWidth={1.5} />
      <path d="M7 6h6m6 0h-6m0 0L9 20" strokeWidth={1.2} />
    </g>
  </svg>
);

export default SvgClearFormatting;
