import * as React from "react";

const SvgPrintDissabled = ({ title, titleId, ...props }) => (
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
      id="Print_Dissabled_svg__a"
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
    <g mask="url(#Print_Dissabled_svg__a)">
      <path d="M6 8V3h12v5M6 21h12v-8H6v8Z" stroke="#555770" strokeWidth={2} />
      <path
        d="M22 16v1h1v-1h-1ZM2 16H1v1h1v-1Zm2-8h16V6H4v2Zm17 1v7h2V9h-2ZM3 16V9H1v7h2Zm3-1H2v2h4v-2Zm16 0h-4v2h4v-2Zm-2-7a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2ZM4 6a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V6Z"
        fill="#555770"
      />
      <circle cx={19} cy={10} r={0.5} stroke="#555770" />
    </g>
    <path d="m.738 2.155 21.117 21.117" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgPrintDissabled;
