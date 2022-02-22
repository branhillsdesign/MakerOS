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
    <g clipPath="url(#Print_Dissabled_svg__a)">
      <mask
        id="Print_Dissabled_svg__b"
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
      <g mask="url(#Print_Dissabled_svg__b)">
        <path
          d="M6 16H2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7h-4"
          stroke="#555770"
          strokeWidth={2}
        />
        <path
          d="M6 6V3h12v3M6 21h12v-8H6v8Z"
          stroke="currentColor"
          strokeWidth={2}
        />
        <circle cx={19} cy={10} r={0.5} stroke="#555770" />
      </g>
      <path d="m.792 2.21 21.09 21.089" stroke="#555770" strokeWidth={2} />
    </g>
    <defs>
      <clipPath id="Print_Dissabled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPrintDissabled;
