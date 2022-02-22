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
    <g mask="url(#Select_All_svg__a)">
      <path
        d="M8 8v-.6h-.6V8H8Zm0 8h-.6v.6H8V16Zm8 0v.6h.6V16H16Zm0-8h.6v-.6H16V8ZM3.4 5v14h1.2V5H3.4ZM5 20.6h14v-1.2H5v1.2ZM20.6 19V5h-1.2v14h1.2ZM19 3.4H5v1.2h14V3.4ZM7.4 8v8h1.2V8H7.4Zm.6 8.6h8v-1.2H8v1.2Zm8.6-.6V8h-1.2v8h1.2ZM16 7.4H8v1.2h8V7.4ZM20.6 5A1.6 1.6 0 0 0 19 3.4v1.2c.22 0 .4.18.4.4h1.2ZM19 20.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM3.4 19A1.6 1.6 0 0 0 5 20.6v-1.2a.4.4 0 0 1-.4-.4H3.4ZM4.6 5c0-.22.18-.4.4-.4V3.4A1.6 1.6 0 0 0 3.4 5h1.2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgSelectAll;
