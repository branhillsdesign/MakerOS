import * as React from "react";

const SvgTable30 = ({ title, titleId, ...props }) => (
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
      id="Table_30_svg__a"
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
        d="M3 3h2v17.5H3V3ZM3 20.5h2v.5H3v-.5ZM11 15h2v2h-2v-2ZM19 15h2v2h-2v-2ZM7 11h2v2H7v-2ZM11 11h2v2h-2v-2ZM15 11h2v2h-2v-2ZM19 11h2v2h-2v-2ZM11 7h2v2h-2V7ZM19 7h2v2h-2V7ZM7 3h2v2H7V3ZM7 19h2v2H7v-2ZM11 3h2v2h-2V3ZM11 19h2v2h-2v-2ZM15 3h2v2h-2V3ZM15 19h2v2h-2v-2ZM19 3h2v2h-2V3ZM19 19h2v2h-2v-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_30_svg__a)" strokeWidth={2}>
      <path d="M20 12v8H4V4h16v8Z" stroke="currentColor" />
      <path d="M4 3v18" stroke="#555770" />
    </g>
  </svg>
);

export default SvgTable30;
