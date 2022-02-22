import * as React from "react";

const SvgTicket = ({ title, titleId, ...props }) => (
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
      d="M3 14v-.6h-.6v.6H3Zm0-4h-.6v.6H3V10Zm18 4h.6v-.6H21v.6Zm0-4v.6h.6V10H21ZM4 5.6h16V4.4H4v1.2Zm16 12.8H4v1.2h16v-1.2ZM4.4 12A1.4 1.4 0 0 1 3 13.4v1.2A2.6 2.6 0 0 0 5.6 12H4.4ZM3 10.6A1.4 1.4 0 0 1 4.4 12h1.2A2.6 2.6 0 0 0 3 9.4v1.2Zm18 2.8a1.4 1.4 0 0 1-1.4-1.4h-1.2a2.6 2.6 0 0 0 2.6 2.6v-1.2ZM19.6 12a1.4 1.4 0 0 1 1.4-1.4V9.4a2.6 2.6 0 0 0-2.6 2.6h1.2ZM2.4 14v4h1.2v-4H2.4Zm1.2-4V6H2.4v4h1.2Zm16.8-4v4h1.2V6h-1.2Zm0 8v4h1.2v-4h-1.2ZM4 18.4a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 19.6v-1.2Zm16 1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm0-14c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 20 4.4v1.2ZM4 4.4A1.6 1.6 0 0 0 2.4 6h1.2c0-.22.18-.4.4-.4V4.4Z"
      fill="#555770"
    />
    <path
      d="M11.448 10.546 12 9.264l.552 1.282a.8.8 0 0 0 .66.48l1.39.129-1.048.92a.8.8 0 0 0-.253.777l.307 1.361-1.2-.712a.8.8 0 0 0-.816 0l-1.2.712.307-1.36a.8.8 0 0 0-.253-.778l-1.048-.92 1.39-.13a.8.8 0 0 0 .66-.48Z"
      stroke="#555770"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTicket;
