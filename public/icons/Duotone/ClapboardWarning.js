import * as React from "react";

const SvgClapboardWarning = ({ title, titleId, ...props }) => (
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
      id="Clapboard_Warning_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={4}
      width={20}
      height={16}
    >
      <path
        d="M2 6a2 2 0 0 1 2-2h18v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Clapboard_Warning_svg__a)" strokeWidth={2}>
      <path
        d="M3 2.5V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9M3 2.5l3.217 5.974a1 1 0 0 0 .88.526H11.5M3 2.5h5.5M21 9h-4.5M21 9V8M8.5 2.5l3 6.5m-3-6.5h5m-2 6.5h5m-3-6.5 3 6.5m-3-6.5h5m0 0L21 8m-2.5-5.5H21V8"
        stroke="#555770"
      />
      <path d="M12 11v3m0 3v-1.5" stroke="currentColor" />
    </g>
  </svg>
);

export default SvgClapboardWarning;
