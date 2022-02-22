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
    <g mask="url(#Switch_Crossed_svg__a)" strokeWidth={2}>
      <path
        d="M15.914 11H20v2h-4.086l-1-1 1-1Zm-7.828 2H4v-2h4.086l1 1-1 1Z"
        stroke="#555770"
      />
      <path
        d="M11 8.086V4h2v4.086l-1 1-1-1Zm2 7.828V20h-2v-4.086l1-1 1 1Z"
        stroke="currentColor"
      />
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" />
    </g>
  </svg>
);

export default SvgSwitchCrossed;
