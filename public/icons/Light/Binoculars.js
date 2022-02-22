import * as React from "react";

const SvgBinoculars = ({ title, titleId, ...props }) => (
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
      d="M9.5 16v.6h.6V16h-.6Zm-6 0h-.6v.6h.6V16ZM8 20v.6h.6V20H8Zm12.5-4v.6h.6V16h-.6Zm-6 0h-.6v.6h.6V16Zm4.5 4v.6h.6V20H19ZM3.5 3.6h6V2.4h-6v1.2ZM4.1 16V3H2.9v13h1.2ZM3.5 2.4H2v1.2h1.5V2.4ZM2 3.6h7.5V2.4H2v1.2Zm9-1.2H9.5v1.2H11V2.4Zm-6 13H3.5v1.2H5v-1.2Zm-.6.6v4h1.2v-4H4.4Zm5.1-.6H8v1.2h1.5v-1.2Zm-1.5 0H5v1.2h3v-1.2Zm-.6.6v4h1.2v-4H7.4Zm.6 3.4H3.5v1.2H8v-1.2Zm-4.5 1.2h6v-1.2h-6v1.2Zm11-17h6V2.4h-6v1.2Zm5.4-.6v13h1.2V3h-1.2Zm-5.4-.6H13v1.2h1.5V2.4ZM13 3.6h7.5V2.4H13v1.2Zm9-1.2h-1.5v1.2H22V2.4Zm-6 13h-1.5v1.2H16v-1.2Zm-.6.6v4h1.2v-4h-1.2Zm5.1-.6H19v1.2h1.5v-1.2Zm-1.5 0h-3v1.2h3v-1.2Zm-.6.6v4h1.2v-4h-1.2Zm.6 3.4h-4.5v1.2H19v-1.2Zm-4.5 1.2h6v-1.2h-6v1.2ZM8.9 3v7h1.2V3H8.9Zm0 7v6h1.2v-6H8.9Zm6.2 6v-6h-1.2v6h1.2Zm0-6V3h-1.2v7h1.2Zm-5.6.6h5V9.4h-5v1.2Zm1.9-2.1v3h1.2v-3h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBinoculars;
