import * as React from "react";

const SvgMedicalHelp = ({ title, titleId, ...props }) => (
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
      d="m8.5 4-.424-.424-.176.175V4h.6Zm1-1v-.6h-.249l-.175.176L9.5 3Zm5 0 .424-.424-.175-.176H14.5V3Zm1 1h.6v-.249l-.176-.175L15.5 4Zm4.9 4v12h1.2V8h-1.2ZM20 20.4H4v1.2h16v-1.2ZM3.6 20V8H2.4v12h1.2ZM4 7.6h4.5V6.4H4v1.2ZM9.1 7V4H7.9v3h1.2Zm-.176-2.576 1-1-.848-.848-1 1 .848.848ZM9.5 3.6h5V2.4h-5v1.2Zm4.576-.176 1 1 .848-.848-1-1-.848.848ZM8.5 7.6h7V6.4h-7v1.2Zm7 0H20V6.4h-4.5v1.2ZM14.9 4v3h1.2V4h-1.2Zm-3.5 7v3h1.2v-3h-1.2Zm0 3v3h1.2v-3h-1.2Zm.6-.6H9v1.2h3v-1.2Zm0 1.2h3v-1.2h-3v1.2Zm-8 5.8a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 21.6v-1.2Zm16.4-.4a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2Zm1.2-12A1.6 1.6 0 0 0 20 6.4v1.2c.22 0 .4.18.4.4h1.2Zm-18 0c0-.22.18-.4.4-.4V6.4A1.6 1.6 0 0 0 2.4 8h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMedicalHelp;
