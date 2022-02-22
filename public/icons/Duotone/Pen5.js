import * as React from "react";

const SvgPen5 = ({ title, titleId, ...props }) => (
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
      id="Pen_5_svg__a"
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
        d="M0 0h6.029l11.899 11.9 1.431-1.4L8.93 0H24v24H0V0Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Pen_5_svg__a)" strokeWidth={2}>
      <path
        d="m17.25 4.414 2.336 2.336-1.308 1.308-2.336-2.336 1.308-1.308.377-.377-.377.377Z"
        stroke="currentColor"
      />
      <path
        d="M16.892 9.444 6.336 20H4v-2.336L14.556 7.108l2.336 2.336Z"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgPen5;
