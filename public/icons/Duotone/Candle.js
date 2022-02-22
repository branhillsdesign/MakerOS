import * as React from "react";

const SvgCandle = ({ title, titleId, ...props }) => (
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
      id="Candle_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={6}
      y={0}
      width={12}
      height={24}
    >
      <path fill="#fff" d="M6 0h12v24H6z" />
    </mask>
    <g mask="url(#Candle_svg__a)" strokeWidth={2}>
      <path
        d="M14.4 6.813A2.194 2.194 0 0 1 12.2 9C10.985 9 10 8.02 10 6.812c0-1.208.88-3.5 2.2-4.812.8 3 2.2 3 2.2 4.813Z"
        stroke="currentColor"
      />
      <path
        d="M17 24v-4m-5-7H8a1 1 0 0 0-1 1v4m5-5h4a1 1 0 0 1 1 1m-5-1-5 5m0 0v6l10-10m0 0v6m0 0-5.5 5.5"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgCandle;
