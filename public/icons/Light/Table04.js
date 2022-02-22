import * as React from "react";

const SvgTable04 = ({ title, titleId, ...props }) => (
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
      id="Table_04_svg__a"
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
        d="M3 3h2v8h-.8v2H5v6H3V3ZM3 19h2v2H3v-2ZM19.797 15H21v2h-1.203v-2ZM19.797 11H21v2h-1.203v-2ZM19.797 7H21v2h-1.203V7ZM7 3h2v1.2H7V3ZM11 3h2v1.2h-2V3ZM15 3h2v1.2h-2V3ZM19 3h2v2h-2V3ZM5 19h6v.8h2V19h8v2H5v-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_04_svg__a)">
      <path
        d="M20.4 11.4h-7.8V3.6h7.8v7.8Zm-9-7.8v7.8H3.6V3.6h7.8Zm-7.8 9h7.8v7.8H3.6v-7.8Zm9 0h7.8v7.8h-7.8v-7.8Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTable04;
