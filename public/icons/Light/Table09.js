import * as React from "react";

const SvgTable09 = ({ title, titleId, ...props }) => (
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
      id="Table_09_svg__a"
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
        d="M3 3h2v17.5H3V3ZM3 20.5h2v.5H3v-.5ZM11.396 15h1.206v2h-1.206v-2ZM19 15h2v2h-2v-2Z"
        fill="#fff"
      />
      <path
        d="M3 11h16v2H3v-2ZM19 11.398h2v1.196h-2v-1.196ZM11.396 7h1.206v2h-1.206V7ZM19 7h2v2h-2V7ZM7 3h2v2H7V3ZM7 19h2v2H7v-2ZM11.396 3h1.206v2h-1.206V3ZM11.396 19h1.206v2h-1.206v-2ZM15 3h2v2h-2V3ZM15 19h2v2h-2v-2ZM19 3h2v2h-2V3ZM19 19h2v2h-2v-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_09_svg__a)">
      <path
        d="M20.4 11.4h-7.8V3.6h7.8v7.8Zm-9-7.8v7.8H3.6V3.6h7.8Zm-7.8 9h7.8v7.8H3.6v-7.8Zm9 0h7.8v7.8h-7.8v-7.8Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTable09;
