import * as React from "react";

const SvgTable05 = ({ title, titleId, ...props }) => (
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
      id="Table_05_svg__a"
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
        d="M21 21h-2v-7.995h.8V11H19V5h2v16ZM21 5h-2V3h2v2ZM4.195 9H3V7h1.195v2ZM4.195 13H3v-2h1.195v2ZM4.195 17H3v-2h1.195v2ZM17 21h-2v-1.203h2V21ZM13 21h-2v-1.203h2V21ZM9 21H7v-1.203h2V21ZM5 21H3v-2h2v2ZM19 5h-5.996v-.8H11V5H3V3h16v2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_05_svg__a)">
      <path
        d="M20.4 11.4h-7.8V3.6h7.8v7.8Zm-9-7.8v7.8H3.6V3.6h7.8Zm-7.8 9h7.8v7.8H3.6v-7.8Zm9 0h7.8v7.8h-7.8v-7.8Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTable05;
