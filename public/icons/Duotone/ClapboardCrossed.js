import * as React from "react";

const SvgClapboardCrossed = ({ title, titleId, ...props }) => (
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
      id="Clapboard_Crossed_svg__a"
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
        d="M22.003 22 0 0v24h24V0H2.832L23.5 20.668 22.003 22Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Clapboard_Crossed_svg__a)">
      <mask
        id="Clapboard_Crossed_svg__b"
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
      <g mask="url(#Clapboard_Crossed_svg__b)" strokeWidth={2}>
        <path
          d="m8.5 2.5 3 6.5m-3-6.5h5m-5 0H4.674a1 1 0 0 0-.88 1.474l2.423 4.5a1 1 0 0 0 .88.526H11.5m0 0h5m-3-6.5 3 6.5m-3-6.5h4.356a1 1 0 0 1 .91.586l2.16 4.752A.822.822 0 0 1 20.178 9H16.5"
          stroke="currentColor"
        />
        <path
          d="M21 2.5V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2.5"
          stroke="#555770"
        />
      </g>
      <path d="M1.583 3 19.5 20.917" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgClapboardCrossed;
