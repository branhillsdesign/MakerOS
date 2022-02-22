import * as React from "react";

const SvgNoSmoking = ({ title, titleId, ...props }) => (
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
      id="No_Smoking_svg__a"
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
    <g mask="url(#No_Smoking_svg__a)">
      <path
        d="m3.524 4.942 15.5 15.5M3 14v-1h13v1H3Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <path
        d="M19 12v3m2.5-3v3m0-4V9a5 5 0 0 0-5-5h.25a2.75 2.75 0 0 0 2.75-2.75M19 11v-1a3 3 0 0 0-3-3h-1.5a2.5 2.5 0 0 1 0-5"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </g>
  </svg>
);

export default SvgNoSmoking;
