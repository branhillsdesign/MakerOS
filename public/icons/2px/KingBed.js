import * as React from "react";

const SvgKingBed = ({ title, titleId, ...props }) => (
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
    <mask id="King_Bed_svg__a" fill="#fff">
      <path d="m4 19-1-3h3l-1 3H4ZM19 19l-1-3h3l-1 3h-1Z" />
    </mask>
    <path
      d="M3 16v-2H.225l.878 2.633L3 16Zm1 3-1.897.633L2.558 21H4v-2Zm1 0v2h1.442l.455-1.367L5 19Zm1-3 1.897.633L8.775 14H6v2Zm12 0v-2h-2.775l.878 2.633L18 16Zm1 3-1.897.633.455 1.367H19v-2Zm1 0v2h1.442l.455-1.367L20 19Zm1-3 1.897.633.878-2.633H21v2Zm-19.897.633 1 3 3.794-1.265-1-3-3.794 1.264ZM4 21h1v-4H4v4Zm2.897-1.367 1-3-3.794-1.265-1 3 3.794 1.265ZM6 14H3v4h3v-4Zm10.103 2.633 1 3 3.794-1.265-1-3-3.794 1.264ZM19 21h1v-4h-1v4Zm2.897-1.367 1-3-3.794-1.265-1 3 3.794 1.265ZM21 14h-3v4h3v-4Z"
      fill="#555770"
      mask="url(#King_Bed_svg__a)"
    />
    <path
      d="M3 16H2v1h1v-1Zm18 0v1h1v-1h-1ZM3 17h18v-2H3v2Zm19-1v-4h-2v4h2ZM2 12v4h2v-4H2Zm3-2H4v2h1v-2Zm1 1V7H4v4h2Zm0-4h6V5H6v2Zm6 3H5v2h7v-2Zm-1-4v5h2V6h-2Zm9 4h-1v2h1v-2Zm-1 0h-7v2h7v-2Zm1 1V7h-2v4h2Zm-2-6h-6v2h6V5Zm2 2a2 2 0 0 0-2-2v2h2ZM6 7V5a2 2 0 0 0-2 2h2Zm-2 5v-2a2 2 0 0 0-2 2h2Zm18 0a2 2 0 0 0-2-2v2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgKingBed;
