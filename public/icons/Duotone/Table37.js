import * as React from "react";

const SvgTable37 = ({ title, titleId, ...props }) => (
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
      id="Table_37_svg__a"
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
        d="M3 3h2v18H3V3ZM11 15h2v2h-2v-2ZM7 11h2v2H7v-2ZM11 11h2v2h-2v-2ZM15 11h2v2h-2v-2ZM11 7h2v2h-2V7ZM5 3h14v2H5V3ZM5 19h14v2H5v-2ZM19 3h2v18h-2V3Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_37_svg__a)" strokeWidth={2}>
      <path d="M21 12H3m9-9v18" stroke="currentColor" />
      <path d="M20 12v8H4V4h16v8Z" stroke="#555770" />
    </g>
  </svg>
);

export default SvgTable37;
