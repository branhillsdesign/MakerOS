import * as React from "react";

const SvgOutsideTable = ({ title, titleId, ...props }) => (
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
    <path
      d="M8 17h.6v-.6H8v.6Zm8 0v-.6h-.6v.6h.6ZM5 8l-.349-.488L3.128 8.6H5V8Zm7-5 .349-.488-.349-.25-.349.25L12 3Zm7 5v.6h1.872L19.35 7.512 19 8ZM2.412 12.118l1 5 1.176-.236-1-5-1.176.236ZM4 17.6h4v-1.2H4v1.2Zm3.4-.6v5h1.2v-5H7.4Zm-4 0v5h1.2v-5H3.4Zm17.012-5.118-1 5 1.176.236 1-5-1.176-.236ZM20 16.4h-4v1.2h4v-1.2Zm-4.6.6v5h1.2v-5h-1.2Zm4 0v5h1.2v-5h-1.2Zm-6.8 5V8h-1.2v14h1.2ZM12 7.4H5v1.2h7V7.4ZM5.349 8.488l7-5-.698-.976-7 5 .698.976Zm6.302-5 7 5 .698-.976-7-5-.698.976ZM19 7.4h-7v1.2h7V7.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgOutsideTable;
