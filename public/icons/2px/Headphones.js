import * as React from "react";

const SvgHeadphones = ({ title, titleId, ...props }) => (
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
      d="M5 13a7 7 0 0 1 7-7V4a9 9 0 0 0-9 9h2Zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Z"
      fill="#555770"
    />
    <mask id="Headphones_svg__a" fill="#fff">
      <path d="M1 14a1 1 0 0 1 1-1h3v6H2a1 1 0 0 1-1-1v-4ZM19 13h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v-6Z" />
    </mask>
    <path
      d="M5 13h2v-2H5v2Zm0 6v2h2v-2H5Zm14-6v-2h-2v2h2Zm0 6h-2v2h2v-2ZM2 15h3v-4H2v4Zm1-2v6h4v-6H3Zm2 4H2v4h3v-4Zm-2 1v-4h-4v4h4Zm16-3h3v-4h-3v4Zm2-1v4h4v-4h-4Zm1 3h-3v4h3v-4Zm-1 2v-6h-4v6h4Zm0-1a1 1 0 0 1 1-1v4a3 3 0 0 0 3-3h-4ZM2 17a1 1 0 0 1 1 1h-4a3 3 0 0 0 3 3v-4Zm20-2a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4ZM2 11a3 3 0 0 0-3 3h4a1 1 0 0 1-1 1v-4Z"
      fill="#555770"
      mask="url(#Headphones_svg__a)"
    />
  </svg>
);

export default SvgHeadphones;
