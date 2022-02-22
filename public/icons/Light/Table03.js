import * as React from "react";

const SvgTable03 = ({ title, titleId, ...props }) => (
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
      id="Table_03_svg__a"
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
        d="M3 3h2v18H3V3ZM11.398 15h1.204v2h-1.204v-2ZM7 11h2v2H7v-2ZM11.398 11h1.204v2h-1.204v-2ZM15 11h2v2h-2v-2ZM11.398 7h1.204v2h-1.204V7ZM5 3h14v2H5V3ZM5 19h14v2H5v-2ZM19 3h2v18h-2V3Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_03_svg__a)">
      <path
        d="M20.4 11.4h-7.8V3.6h7.8v7.8Zm-9-7.8v7.8H3.6V3.6h7.8Zm-7.8 9h7.8v7.8H3.6v-7.8Zm9 0h7.8v7.8h-7.8v-7.8Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTable03;
