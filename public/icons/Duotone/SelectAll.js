import * as React from "react";

const SvgSelectAll = ({ title, titleId, ...props }) => (
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
      id="Select_All_svg__a"
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
        d="M7 17V7h10v10H7ZM5 5V3H3v2h2ZM9 5V3H7v2h2ZM13 5V3h-2v2h2ZM17 5V3h-2v2h2ZM21 5V3h-2v2h2ZM5 21v-2H3v2h2ZM9 21v-2H7v2h2ZM13 21v-2h-2v2h2ZM17 21v-2h-2v2h2ZM21 21v-2h-2v2h2ZM5 9V7H3v2h2ZM5 13v-2H3v2h2ZM5 17v-2H3v2h2ZM21 9V7h-2v2h2ZM21 13v-2h-2v2h2ZM21 17v-2h-2v2h2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Select_All_svg__a)" strokeWidth={2}>
      <path
        d="M4 19V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
        stroke="currentColor"
      />
      <path d="M8 16V8h8v8H8Z" stroke="#555770" />
    </g>
  </svg>
);

export default SvgSelectAll;
