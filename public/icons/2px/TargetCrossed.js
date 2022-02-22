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
    <g mask="url(#Target_Crossed_svg__a)" stroke="#555770" strokeWidth={2}>
      <path d="m3.524 4.942 15.5 15.5M20.182 12A8.182 8.182 0 0 1 12 20.182M20.182 12A8.182 8.182 0 0 0 12 3.818M20.182 12H23m-11 8.182A8.182 8.182 0 0 1 3.818 12M12 20.182V23M3.818 12A8.182 8.182 0 0 1 12 3.818M3.818 12H1m11-8.182V1" />
    </g>
  </svg>
);

export default SvgTargetCrossed;
