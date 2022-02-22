import * as React from "react";

const SvgTable13 = ({ title, titleId, ...props }) => (
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
      id="Table_13_svg__a"
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
        d="M3 21v-2h17.5v2H3ZM20.5 21v-2h.5v2h-.5ZM15 13v-2h2v2h-2ZM15 5V3h2v2h-2ZM11.402 17v-2h1.192v2h-1.192ZM11.402 13v-2h1.192v2h-1.192ZM11.402 9V7h1.192v2h-1.192ZM11.402 5V3h1.192v2h-1.192ZM7 13v-2h2v2H7ZM7 5V3h2v2H7ZM3 17v-2h2v2H3ZM19 17v-2h2v2h-2ZM3 12.598v-1.196h2v1.196H3ZM19 12.598v-1.196h2v1.196h-2ZM3 9V7h2v2H3ZM19 9V7h2v2h-2ZM3 5V3h2v2H3ZM19 5V3h2v2h-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_13_svg__a)">
      <path
        d="M20.4 11.4h-7.8V3.6h7.8v7.8Zm-9-7.8v7.8H3.6V3.6h7.8Zm-7.8 9h7.8v7.8H3.6v-7.8Zm9 0h7.8v7.8h-7.8v-7.8Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTable13;
