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
      d="M9.5 16v1h1v-1h-1Zm-6 0h-1v1h1v-1ZM8 20v1h1v-1H8Zm12.5-4v1h1v-1h-1Zm-6 0h-1v1h1v-1Zm4.5 4v1h1v-1h-1ZM3.5 4h6V2h-6v2Zm1 12V3h-2v13h2Zm-1-14H2v2h1.5V2ZM2 4h7.5V2H2v2Zm9-2H9.5v2H11V2ZM5 15H3.5v2H5v-2Zm-1 1v4h2v-4H4Zm5.5-1H8v2h1.5v-2ZM8 15H5v2h3v-2Zm-1 1v4h2v-4H7Zm1 3H3.5v2H8v-2Zm-4.5 2h6v-2h-6v2Zm11-17h6V2h-6v2Zm5-1v13h2V3h-2Zm-5-1H13v2h1.5V2ZM13 4h7.5V2H13v2Zm9-2h-1.5v2H22V2Zm-6 13h-1.5v2H16v-2Zm-1 1v4h2v-4h-2Zm5.5-1H19v2h1.5v-2ZM19 15h-3v2h3v-2Zm-1 1v4h2v-4h-2Zm1 3h-4.5v2H19v-2Zm-4.5 2h6v-2h-6v2Zm-6-18v7h2V3h-2Zm0 7v6h2v-6h-2Zm7 6v-6h-2v6h2Zm0-6V3h-2v7h2Zm-6 1h5V9h-5v2ZM11 8.5v3h2v-3h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBinoculars;
