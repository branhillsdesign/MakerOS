import * as React from "react";

const SvgFlag3 = ({ title, titleId, ...props }) => (
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
      d="M4 3V2H3v1h1Zm16 12v1h1v-1h-1Zm0-10h1V4h-1v1Zm-8-2 .894-.447L12.618 2H12v1Zm1 2-.894.447.276.553H13V5Zm-1 8 .894-.447-.276-.553H12v1Zm1 2-.894.447.276.553H13v-1Zm-8 8V13H3v10h2Zm0-10V3H3v10h2Zm14-8v10h2V5h-2ZM4 4h8V2H4v2Zm7.106-.553 1 2 1.788-.894-1-2-1.788.894ZM13 6h7V4h-7v2Zm-1 6H4v2h8v-2Zm8 2h-7v2h7v-2Zm-6.106.553-1-2-1.788.894 1 2 1.788-.894Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFlag3;
