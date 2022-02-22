import * as React from "react";

const SvgTagwithHeart = ({ title, titleId, ...props }) => (
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
      d="M11 10.5c-1.105 0-2 .922-2 2.059 0 .463.03 1.026.543 1.642C10.055 14.816 13 17.5 13 17.5s2.945-2.684 3.457-3.3c.513-.615.543-1.178.543-1.641 0-1.137-.895-2.059-2-2.059s-2 .922-2 2.059c0-1.137-.895-2.059-2-2.059Z"
      fill="#424242"
    />
    <path d="M8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#555770" />
    <path
      d="M3 11.086V4a1 1 0 0 1 1-1h7.086a1 1 0 0 1 .707.293l9 9a1 1 0 0 1 0 1.414l-7.086 7.086a1 1 0 0 1-1.414 0l-9-9A1 1 0 0 1 3 11.086Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTagwithHeart;
