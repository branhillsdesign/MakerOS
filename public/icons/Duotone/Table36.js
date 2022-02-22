import * as React from "react";

const SvgTable36 = ({ title, titleId, ...props }) => (
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
      id="Table_36_svg__a"
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
        d="M3 3h2v16H3V3ZM3 19h2v2H3v-2ZM19 15h2v2h-2v-2ZM19 11h2v2h-2v-2ZM19 7h2v2h-2V7ZM7 3h2v2H7V3ZM11 3h2v2h-2V3ZM15 3h2v2h-2V3ZM19 3h2v2h-2V3ZM5 19h16v2H5v-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_36_svg__a)">
      <path d="M20 12v8H4V4h16v8Z" stroke="currentColor" strokeWidth={2} />
    </g>
    <mask
      id="Table_36_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path d="M6 2H2v20h20v-4H6V2Z" fill="#000" />
    </mask>
    <g mask="url(#Table_36_svg__b)">
      <mask
        id="Table_36_svg__c"
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
          d="M3 3h2v16H3V3ZM3 19h2v2H3v-2ZM19 15h2v2h-2v-2ZM19 11h2v2h-2v-2ZM19 7h2v2h-2V7ZM7 3h2v2H7V3ZM11 3h2v2h-2V3ZM15 3h2v2h-2V3ZM19 3h2v2h-2V3ZM5 19h16v2H5v-2Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#Table_36_svg__c)">
        <path d="M20 12v8H4V4h16v8Z" stroke="#555770" strokeWidth={2} />
      </g>
    </g>
  </svg>
);

export default SvgTable36;
