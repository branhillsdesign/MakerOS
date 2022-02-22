import * as React from "react";

const SvgTargetCrossed = ({ title, titleId, ...props }) => (
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
      id="Target_Crossed_svg__a"
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
        d="M19.784 19.78 4 3.998H0V24h24V0H5.698v2.866l15.5 15.5-1.414 1.415Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Target_Crossed_svg__a)" strokeWidth={2}>
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" />
      <path
        d="M20.182 12H23m-11 8.182V23M3.818 12H1m11-8.182V1"
        stroke="currentColor"
      />
      <path
        d="M20.182 12a8.182 8.182 0 1 1-16.364 0 8.182 8.182 0 0 1 16.364 0Z"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgTargetCrossed;
