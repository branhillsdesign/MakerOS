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
      d="m8.5 4-.707-.707-.293.293V4h1Zm1-1V2h-.414l-.293.293L9.5 3Zm5 0 .707-.707L14.914 2H14.5v1Zm1 1h1v-.414l-.293-.293L15.5 4ZM20 8v12h2V8h-2Zm0 12H4v2h16v-2ZM4 20V8H2v12h2ZM4 8h4.5V6H4v2Zm5.5-1V4h-2v3h2Zm-.293-2.293 1-1-1.414-1.414-1 1 1.414 1.414ZM9.5 4h5V2h-5v2Zm4.293-.293 1 1 1.414-1.414-1-1-1.414 1.414ZM8.5 8h7V6h-7v2Zm7 0H20V6h-4.5v2Zm-1-4v3h2V4h-2ZM11 11v3h2v-3h-2Zm0 3v3h2v-3h-2Zm1-1H9v2h3v-2Zm0 2h3v-2h-3v2Zm-8 5H2a2 2 0 0 0 2 2v-2Zm16 0v2a2 2 0 0 0 2-2h-2Zm2-12a2 2 0 0 0-2-2v2h2ZM4 8V6a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMedicalHelp;
