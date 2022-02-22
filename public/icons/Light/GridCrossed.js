import * as React from "react";

const SvgGridCrossed = ({ title, titleId, ...props }) => (
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
      id="Grid_Crossed_svg__a"
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
    <g mask="url(#Grid_Crossed_svg__a)" stroke="#555770">
      <path d="M2.5 3 21 21.5" strokeWidth={1.5} />
      <path
        d="M14.667 4H19a1 1 0 0 1 1 1v4.333M14.667 4v16m0-16H9.333m5.334 16H19a1 1 0 0 0 1-1v-4.333M14.667 20H9.333M20 9.333H4m16 0v5.334M4 9.333V5a1 1 0 0 1 1-1h4.333M4 9.333v5.334m16 0H4m0 0V19a1 1 0 0 0 1 1h4.333m0-16v16"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgGridCrossed;
