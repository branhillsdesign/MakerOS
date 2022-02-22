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
        d="M19.784 19.78 4 3.998H0V24h24V0H5.698v2.866l15.5 15.5-1.414 1.415Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Switch_Crossed_svg__a)" stroke="#555770" strokeWidth={2}>
      <path d="m3.524 4.942 15.5 15.5M11 4h2v4.086l-1 1-1-1V4Zm-7 9v-2h4.086l1 1-1 1H4Zm7 7v-4.086l1-1 1 1V20h-2Zm9-7h-4.086l-1-1 1-1H20v2Z" />
    </g>
  </svg>
);

export default SvgSwitchCrossed;
