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
        d="M8 8V7H7v1h1Zm0 8H7v1h1v-1Zm8 0v1h1v-1h-1Zm0-8h1V7h-1v1ZM3 5v14h2V5H3Zm2 16h14v-2H5v2Zm16-2V5h-2v14h2ZM19 3H5v2h14V3ZM7 8v8h2V8H7Zm1 9h8v-2H8v2Zm9-1V8h-2v8h2Zm-1-9H8v2h8V7Zm5-2a2 2 0 0 0-2-2v2h2Zm-2 16a2 2 0 0 0 2-2h-2v2ZM3 19a2 2 0 0 0 2 2v-2H3ZM5 5V3a2 2 0 0 0-2 2h2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgSelectAll;
