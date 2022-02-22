import * as React from "react";

const SvgTable27 = ({ title, titleId, ...props }) => (
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
      id="Table_27_svg__a"
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
        d="M3 21v-2h17.5v2H3ZM20.5 21v-2h.5v2h-.5ZM15 13v-2h2v2h-2ZM15 5V3h2v2h-2ZM11 17v-2h2v2h-2ZM11 13v-2h2v2h-2ZM11 9V7h2v2h-2ZM11 5V3h2v2h-2ZM7 13v-2h2v2H7ZM7 5V3h2v2H7ZM3 17v-2h2v2H3ZM19 17v-2h2v2h-2ZM3 13v-2h2v2H3ZM19 13v-2h2v2h-2ZM3 9V7h2v2H3ZM19 9V7h2v2h-2ZM3 5V3h2v2H3ZM19 5V3h2v2h-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_27_svg__a)" strokeWidth={2}>
      <path d="M20 12v8H4V4h16v8Z" stroke="currentColor" />
      <path d="M3 20h18" stroke="#555770" />
    </g>
  </svg>
);

export default SvgTable27;
