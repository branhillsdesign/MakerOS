import * as React from "react";

const SvgTable12 = ({ title, titleId, ...props }) => (
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
      id="Table_12_svg__a"
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
        d="M21 21h-2V3.5h2V21ZM21 3.5h-2V3h2v.5ZM12.598 9h-1.196V7h1.196v2ZM5 9H3V7h2v2ZM17 13h-2v-2h2v2ZM12.598 13h-1.196v-2h1.196v2ZM9 13H7v-2h2v2ZM5 12.597H3v-1.195h2v1.195ZM12.598 17h-1.196v-2h1.196v2ZM5 17H3v-2h2v2ZM17 21h-2v-2h2v2ZM17 5h-2V3h2v2ZM12.598 21h-1.196v-2h1.196v2ZM12.598 5h-1.196V3h1.196v2ZM9 21H7v-2h2v2ZM9 5H7V3h2v2ZM5 21H3v-2h2v2ZM5 5H3V3h2v2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_12_svg__a)">
      <path
        d="M20.4 11.4h-7.8V3.6h7.8v7.8Zm-9-7.8v7.8H3.6V3.6h7.8Zm-7.8 9h7.8v7.8H3.6v-7.8Zm9 0h7.8v7.8h-7.8v-7.8Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTable12;
