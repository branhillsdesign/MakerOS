import * as React from "react";

const SvgTable23 = ({ title, titleId, ...props }) => (
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
      id="Table_23_svg__a"
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
        d="M3 3h2v16H3V3ZM3 19h2v2H3v-2ZM19 15h2v2h-2v-2ZM19 11h2v2h-2v-2ZM19 7h2v2h-2V7ZM7 3h2v2H7V3ZM11 3h2v2h-2V3ZM15 3h2v2h-2V3ZM19 3h2v2h-2V3ZM5 19h16v2H5v-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_23_svg__a)">
      <path
        d="M20 11h-7V4h7v7Zm-9-7v7H4V4h7Zm-7 9h7v7H4v-7Zm9 0h7v7h-7v-7Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgTable23;
