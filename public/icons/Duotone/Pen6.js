import * as React from "react";

const SvgPen6 = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Pen_6_svg__a)">
      <path
        d="M4 20v-2.336l13.25-13.25 2.336 2.336.707.707-.707-.707L6.336 20H4Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Pen_6_svg__b"
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
      <g mask="url(#Pen_6_svg__b)">
        <path
          d="M4 20v-2.336l13.25-13.25 2.336 2.336.707.707-.707-.707L6.336 20H4Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Pen_6_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPen6;
