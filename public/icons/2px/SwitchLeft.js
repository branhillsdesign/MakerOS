import * as React from "react";

const SvgSwitchLeft = ({ title, titleId, ...props }) => (
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
      id="Switch_Left_svg__a"
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
        d="M1 8.101A6.979 6.979 0 0 1 6 6a6 6 0 1 1 0 12 6.98 6.98 0 0 1-5-2.101l-1 1V24h24V0H0v7.101l1 1Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Switch_Left_svg__a)">
      <rect
        x={-1}
        y={1}
        width={20}
        height={4}
        rx={2}
        transform="matrix(-1 0 0 1 21 9)"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <circle
      r={4}
      transform="matrix(-1 0 0 1 6 12)"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSwitchLeft;
