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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Target_Crossed_svg__a)" stroke="#555770">
      <path d="M2.5 3 21 21.5" strokeWidth={1.5} />
      <path
        d="M20.182 12A8.182 8.182 0 0 1 12 20.182M20.182 12A8.182 8.182 0 0 0 12 3.818M20.182 12H23m-11 8.182A8.182 8.182 0 0 1 3.818 12M12 20.182V23M3.818 12A8.182 8.182 0 0 1 12 3.818M3.818 12H1m11-8.182V1"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTargetCrossed;
