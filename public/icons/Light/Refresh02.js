import * as React from "react";

const SvgRefresh02 = ({ title, titleId, ...props }) => (
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
      id="Refresh_02_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={3}
      width={20}
      height={19}
    >
      <path
        d="M18 10h4V3H2v19h9.01v-3.057h1.992V22h4.059l-2.237-3.59 1.696-1.062L19.428 22H22v-4.01l-4.21-2.049.874-1.8L22 15.755V12h-4v-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Refresh_02_svg__a)">
      <path d="M20 12a8 8 0 1 1-2-5.292" stroke="#555770" strokeWidth={1.2} />
    </g>
    <path
      d="M20.4 9.4h-4.951L20.4 4.449V9.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgRefresh02;
