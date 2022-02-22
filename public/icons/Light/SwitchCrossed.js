import * as React from "react";

const SvgSwitchCrossed = ({ title, titleId, ...props }) => (
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
      id="Switch_Crossed_svg__a"
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
    <g mask="url(#Switch_Crossed_svg__a)" stroke="#555770" strokeWidth={1.2}>
      <path d="m4.095 4.942 15.5 15.5M10.6 3.6h2.8v4.651l-1.4 1.4-1.4-1.4V3.6Zm0 16.8v-4.651l1.324-1.325.076-.075.076.075L13.4 15.75V20.4h-2.8Zm9.8-7h-4.651l-1.325-1.324L14.35 12l.075-.076L15.75 10.6H20.4v2.8Zm-16.8 0v-2.8h4.651l1.325 1.324.075.076-.075.076L8.25 13.4H3.6Z" />
    </g>
  </svg>
);

export default SvgSwitchCrossed;
