import * as React from "react";

const SvgEmoticonLaughing1 = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="m16.302 15 .758.652A1 1 0 0 0 16.302 14v1Zm-8.605 0v-1a1 1 0 0 0-.758 1.652L7.697 15Zm7.847-.652C14.664 15.369 13.4 16 12 16v2c2.02 0 3.826-.915 5.06-2.348l-1.516-1.304ZM12 16c-1.4 0-2.665-.63-3.545-1.652L6.94 15.652C8.173 17.087 9.98 18 12 18v-2Zm4.302-2H7.697v2h8.605v-2Z"
      fill="currentColor"
    />
    <path
      d="M9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonLaughing1;
