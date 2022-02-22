import * as React from "react";

const SvgCameraRoll = ({ title, titleId, ...props }) => (
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
      d="M13 20v-.6h-.6v.6h.6Zm8 0v.6h.6V20H21Zm0-13h.6v-.6H21V7Zm-8 0h-.6v.6h.6V7Zm-3-2h-.6v.6h.6V5ZM6 5v.6h.6V5H6ZM4 22.6h8v-1.2H4v1.2Zm9.6-1.6v-1h-1.2v1h1.2Zm-.6-.4h8v-1.2h-8v1.2Zm8.6-.6V7h-1.2v13h1.2ZM21 7v-.6H13v1.2H20.999L21 7Zm-7.4 0V6h-1.2v1h1.2ZM12 4.4h-2v1.2h2V4.4Zm-1.4.6V3.1H9.4V5h1.2Zm-.7-2.6H6.1v1.2h3.8V2.4Zm-4.5.7V5h1.2V3.1H5.4ZM6 4.4H4v1.2h2V4.4ZM2.4 6v15h1.2V6H2.4ZM19 9.4h-2v1.2h2V9.4Zm-4 0h-2v1.2h2V9.4Zm-4 0H9v1.2h2V9.4Zm-2 8.2h2v-1.2H9v1.2Zm4 0h2v-1.2h-2v1.2Zm4 0h2v-1.2h-2v1.2ZM6.1 2.4a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5V2.4Zm4.5.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm3 2.9A1.6 1.6 0 0 0 12 4.4v1.2c.22 0 .4.18.4.4h1.2ZM12 22.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM4 4.4A1.6 1.6 0 0 0 2.4 6h1.2c0-.22.18-.4.4-.4V4.4Zm0 17a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 22.6v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCameraRoll;
