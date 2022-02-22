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
      d="M4.6 13A7.4 7.4 0 0 1 12 5.6V4.4A8.6 8.6 0 0 0 3.4 13h1.2ZM12 5.6a7.4 7.4 0 0 1 7.4 7.4h1.2A8.6 8.6 0 0 0 12 4.4v1.2Z"
      fill="#555770"
    />
    <mask id="Headphones_svg__a" fill="#fff">
      <path d="M1 14a1 1 0 0 1 1-1h3v6H2a1 1 0 0 1-1-1v-4ZM19 13h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v-6Z" />
    </mask>
    <path
      d="M5 13h1.2v-1.2H5V13Zm0 6v1.2h1.2V19H5Zm14-6v-1.2h-1.2V13H19Zm0 6h-1.2v1.2H19V19ZM2 14.2h3v-2.4H2v2.4ZM3.8 13v6h2.4v-6H3.8ZM5 17.8H2v2.4h3v-2.4Zm-2.8.2v-4H-.2v4h2.4ZM19 14.2h3v-2.4h-3v2.4Zm2.8-.2v4h2.4v-4h-2.4Zm.2 3.8h-3v2.4h3v-2.4ZM20.2 19v-6h-2.4v6h2.4Zm1.6-1c0-.11.09-.2.2-.2v2.4a2.2 2.2 0 0 0 2.2-2.2h-2.4ZM2 17.8c.11 0 .2.09.2.2H-.2A2.2 2.2 0 0 0 2 20.2v-2.4Zm20-3.6a.2.2 0 0 1-.2-.2h2.4a2.2 2.2 0 0 0-2.2-2.2v2.4ZM2 11.8A2.2 2.2 0 0 0-.2 14h2.4a.2.2 0 0 1-.2.2v-2.4Z"
      fill="#555770"
      mask="url(#Headphones_svg__a)"
    />
  </svg>
);

export default SvgHeadphones;
