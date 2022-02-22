import * as React from "react";

const SvgDashboard = ({ title, titleId, ...props }) => (
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
      id="Dashboard_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={18}
    >
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
    </mask>
    <g mask="url(#Dashboard_svg__a)">
      <path
        d="M2 16C2 10.477 6.477 6 12 6s10 4.477 10 10a9.95 9.95 0 0 1-1.986 5.983H3.986A9.951 9.951 0 0 1 2 16Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
    <path
      d="M10 17a2 2 0 0 0 3.635 1.152L18 11l-7.154 4.366c-.512.362-.846.96-.846 1.634Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDashboard;
