import * as React from "react";

const SvgRefresh3 = ({ title, titleId, ...props }) => (
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
      id="Refresh_3_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={3}
      width={20}
      height={19}
    >
      <path
        d="M18 10h4V3H2v19h9.01v-3.057h1.992V22h4.059l-2.237-3.59 1.696-1.062L19.428 22H22v-4.01l-4.21-2.049.874-1.8L22 15.755V12h-4v-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Refresh_3_svg__a)">
      <circle cx={12} cy={12} r={8} stroke="#555770" strokeWidth={2} />
    </g>
    <path d="M14 10h7V3l-7 7Z" fill="#555770" />
  </svg>
);

export default SvgRefresh3;
