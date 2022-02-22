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
        d="M20 20.5 3.5 3.997H0V24h24V0H4v2.788l16.852 16.86L20 20.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#No_Smoking_svg__a)">
      <path
        d="m3.556 4.902 15.5 15.5M3 14v-1h13v1H3Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
      <path
        d="M18.4 12v3h1.2v-3h-1.2Zm2.5 0v3h1.2v-3h-1.2Zm1.2-1V9h-1.2v2h1.2Zm0-2a5.6 5.6 0 0 0-5.6-5.6v1.2A4.4 4.4 0 0 1 20.9 9h1.2Zm-5.6-4.4h.25V3.4h-.25v1.2Zm.25 0c1.85 0 3.35-1.5 3.35-3.35h-1.2a2.15 2.15 0 0 1-2.15 2.15v1.2ZM19.6 11v-1h-1.2v1h1.2ZM16 6.4h-1.5v1.2H16V6.4Zm-3.4-1.9c0-1.05.85-1.9 1.9-1.9V1.4a3.1 3.1 0 0 0-3.1 3.1h1.2Zm1.9 1.9a1.9 1.9 0 0 1-1.9-1.9h-1.2a3.1 3.1 0 0 0 3.1 3.1V6.4Zm5.1 3.6A3.6 3.6 0 0 0 16 6.4v1.2a2.4 2.4 0 0 1 2.4 2.4h1.2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgNoSmoking;
