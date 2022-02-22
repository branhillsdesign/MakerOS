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
      <path d="m4 19-.5-3h2L5 19H4ZM19 19l-.5-3h2l-.5 3h-1Z" />
    </mask>
    <path
      d="M3.5 16v-1.2H2.083l.233 1.397L3.5 16Zm.5 3-1.184.197.167 1.003H4V19Zm1 0v1.2h1.017l.167-1.003L5 19Zm.5-3 1.184.197.233-1.397H5.5V16Zm13 0v-1.2h-1.417l.233 1.397L18.5 16Zm.5 3-1.184.197.167 1.003H19V19Zm1 0v1.2h1.017l.167-1.003L20 19Zm.5-3 1.184.197.233-1.397H20.5V16Zm-18.184.197.5 3 2.368-.394-.5-3-2.368.394ZM4 20.2h1v-2.4H4v2.4Zm2.184-1.003.5-3-2.368-.394-.5 3 2.368.394ZM5.5 14.8h-2v2.4h2v-2.4Zm11.816 1.397.5 3 2.368-.394-.5-3-2.368.394ZM19 20.2h1v-2.4h-1v2.4Zm2.184-1.003.5-3-2.368-.394-.5 3 2.368.394ZM20.5 14.8h-2v2.4h2v-2.4Z"
      fill="#555770"
      mask="url(#King_Bed_svg__a)"
    />
    <path
      d="M3 16h-.6v.6H3V16Zm18 0v.6h.6V16H21Zm-18 .6h18v-1.2H3v1.2Zm18.6-.6v-4h-1.2v4h1.2ZM2.4 12v4h1.2v-4H2.4ZM5 10.4H4v1.2h1v-1.2Zm.6.6V7H4.4v4h1.2ZM6 6.6h6V5.4H6v1.2Zm6 3.8H5v1.2h7v-1.2ZM11.4 6v5h1.2V6h-1.2Zm8.6 4.4h-1v1.2h1v-1.2Zm-1 0h-7v1.2h7v-1.2Zm.6.6V7h-1.2v4h1.2ZM18 5.4h-6v1.2h6V5.4ZM19.6 7A1.6 1.6 0 0 0 18 5.4v1.2c.22 0 .4.18.4.4h1.2Zm-14 0c0-.22.18-.4.4-.4V5.4A1.6 1.6 0 0 0 4.4 7h1.2Zm-2 5c0-.22.18-.4.4-.4v-1.2A1.6 1.6 0 0 0 2.4 12h1.2Zm18 0a1.6 1.6 0 0 0-1.6-1.6v1.2c.22 0 .4.18.4.4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgKingBed;
