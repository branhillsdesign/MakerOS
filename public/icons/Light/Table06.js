import * as React from "react";

const SvgTable06 = ({ title, titleId, ...props }) => (
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
      id="Table_06_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={18}
      height={18}
    >
      <path
        d="M3 3h2v2H3V3ZM3 19h2v2H3v-2ZM3 15h2v2H3v-2ZM11.41 15h1.192v2H11.41v-2ZM19 15h2v2h-2v-2ZM3 11.398h1.494V11h14.963v.398H21v1.204h-1.543V13H4.494v-.398H3v-1.204ZM3 7h2v2H3V7ZM11.398 7h1.204v2h-1.204V7ZM19 7h2v2h-2V7ZM7 3h2v2H7V3ZM7 19h2v2H7v-2ZM11.398 3h1.204v2h-1.204V3ZM11.41 19h1.192v2H11.41v-2ZM15 3h2v2h-2V3ZM15 19h2v2h-2v-2ZM19 3h2v2h-2V3ZM19 19h2v2h-2v-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_06_svg__a)">
      <path
        d="M20.4 11.4h-7.8V3.6h7.8v7.8Zm-9-7.8v7.8H3.6V3.6h7.8Zm-7.8 9h7.8v7.8H3.6v-7.8Zm9 0h7.8v7.8h-7.8v-7.8Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTable06;
