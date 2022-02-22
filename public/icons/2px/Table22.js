import * as React from "react";

const SvgTable22 = ({ title, titleId, ...props }) => (
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
      id="Table_22_svg__a"
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
        d="M21 21h-2V5h2v16ZM21 5h-2V3h2v2ZM5 9H3V7h2v2ZM5 13H3v-2h2v2ZM5 17H3v-2h2v2ZM17 21h-2v-2h2v2ZM13 21h-2v-2h2v2ZM9 21H7v-2h2v2ZM5 21H3v-2h2v2ZM19 5H3V3h16v2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_22_svg__a)">
      <path
        d="M20 11h-7V4h7v7Zm-9-7v7H4V4h7Zm-7 9h7v7H4v-7Zm9 0h7v7h-7v-7Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgTable22;
