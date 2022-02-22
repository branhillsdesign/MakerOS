import * as React from "react";

const SvgTable35 = ({ title, titleId, ...props }) => (
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
      id="Table_35_svg__a"
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
        d="M21 21h-2V5h2v16ZM21 5h-2V3h2v2ZM5 9H3V7h2v2ZM5 13H3v-2h2v2ZM5 17H3v-2h2v2ZM17 21h-2v-2h2v2ZM13 21h-2v-2h2v2ZM9 21H7v-2h2v2ZM5 21H3v-2h2v2ZM19 5H3V3h16v2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_35_svg__a)">
      <path d="M4 12V4h16v16H4v-8Z" stroke="currentColor" strokeWidth={2} />
    </g>
    <mask
      id="Table_35_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path d="M18 22h4V2H2v4h16v16Z" fill="#000" />
    </mask>
    <g mask="url(#Table_35_svg__b)">
      <mask
        id="Table_35_svg__c"
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
          d="M21 21h-2V5h2v16ZM21 5h-2V3h2v2ZM5 9H3V7h2v2ZM5 13H3v-2h2v2ZM5 17H3v-2h2v2ZM17 21h-2v-2h2v2ZM13 21h-2v-2h2v2ZM9 21H7v-2h2v2ZM5 21H3v-2h2v2ZM19 5H3V3h16v2Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#Table_35_svg__c)">
        <path d="M4 12V4h16v16H4v-8Z" stroke="#555770" strokeWidth={2} />
      </g>
    </g>
  </svg>
);

export default SvgTable35;
