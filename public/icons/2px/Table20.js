import * as React from "react";

const SvgTable20 = ({ title, titleId, ...props }) => (
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
      id="Table_20_svg__a"
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
        d="M21 3v2h-2V3h2ZM5 3v2H3V3h2ZM9 3v2H7V3h2ZM9 11v2H7v-2h2ZM9 19v2H7v-2h2ZM13 3v18h-2V3h2ZM17 3v2h-2V3h2ZM17 11v2h-2v-2h2ZM17 19v2h-2v-2h2ZM21 7v2h-2V7h2ZM5 7v2H3V7h2ZM21 11v2h-2v-2h2ZM5 11v2H3v-2h2ZM21 15v2h-2v-2h2ZM5 15v2H3v-2h2ZM21 19v2h-2v-2h2ZM5 19v2H3v-2h2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_20_svg__a)">
      <path
        d="M20 11h-7V4h7v7Zm-9-7v7H4V4h7Zm-7 9h7v7H4v-7Zm9 0h7v7h-7v-7Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgTable20;
