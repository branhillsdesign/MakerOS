import * as React from "react";

const SvgTable28 = ({ title, titleId, ...props }) => (
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
      id="Table_28_svg__a"
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
        d="M21 21h-2V3.5h2V21ZM21 3.5h-2V3h2v.5ZM13 9h-2V7h2v2ZM5 9H3V7h2v2ZM17 13h-2v-2h2v2ZM13 13h-2v-2h2v2ZM9 13H7v-2h2v2ZM5 13H3v-2h2v2ZM13 17h-2v-2h2v2ZM5 17H3v-2h2v2ZM17 21h-2v-2h2v2ZM17 5h-2V3h2v2ZM13 21h-2v-2h2v2ZM13 5h-2V3h2v2ZM9 21H7v-2h2v2ZM9 5H7V3h2v2ZM5 21H3v-2h2v2ZM5 5H3V3h2v2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_28_svg__a)" strokeWidth={2}>
      <path d="M20 12v8H4V4h16v8Z" stroke="currentColor" />
      <path d="M20 21V3" stroke="#555770" />
    </g>
  </svg>
);

export default SvgTable28;
