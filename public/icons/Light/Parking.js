import * as React from "react";

const SvgParking = ({ title, titleId, ...props }) => (
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
      d="M8 6v-.6h-.6V6H8Zm0 .6h5V5.4H8v1.2ZM8.6 20v-6H7.4v6h1.2Zm0-6V6H7.4v8h1.2Zm4.4-.6H8v1.2h5v-1.2Zm3.4-3.4a3.4 3.4 0 0 1-3.4 3.4v1.2a4.6 4.6 0 0 0 4.6-4.6h-1.2ZM13 6.6a3.4 3.4 0 0 1 3.4 3.4h1.2A4.6 4.6 0 0 0 13 5.4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgParking;
