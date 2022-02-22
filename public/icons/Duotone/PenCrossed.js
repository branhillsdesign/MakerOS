import * as React from "react";

const SvgPenCrossed = ({ title, titleId, ...props }) => (
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
      id="Pen_Crossed_svg__a"
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
    <g mask="url(#Pen_Crossed_svg__a)">
      <path
        d="M4 20v-2.336l13.25-13.25 2.336 2.336.707.707-.707-.707L6.336 20H4Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <mask
        id="Pen_Crossed_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={4}
        width={20}
        height={18}
      >
        <path
          d="M19.742 4.259 2.5 21.5h16.97l1.976-1.976V5.963l-1.704-1.704Z"
          fill="#000"
        />
      </mask>
      <g mask="url(#Pen_Crossed_svg__b)">
        <path
          d="M4 20v-2.336l13.25-13.25 2.336 2.336.707.707-.707-.707L6.336 20H4Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgPenCrossed;
