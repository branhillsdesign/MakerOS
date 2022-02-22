import * as React from "react";

const SvgSwitchRight = ({ title, titleId, ...props }) => (
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
      id="Switch_Right_svg__a"
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
        d="M23 8.101A6.979 6.979 0 0 0 18 6a6 6 0 0 0 0 12c1.959 0 3.73-.805 5-2.101l1 1V24H0V0h24v7.101l-1 1Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Switch_Right_svg__a)">
      <rect
        x={1.6}
        y={9.6}
        width={20.8}
        height={4.8}
        rx={2.4}
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <circle cx={18} cy={12} r={4.4} stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgSwitchRight;
