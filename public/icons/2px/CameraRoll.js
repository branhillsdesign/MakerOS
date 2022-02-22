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
      d="M13 20v-1h-1v1h1Zm8 0v1h1v-1h-1Zm0-13h1V6h-1v1Zm-8 0h-1v1h1V7Zm-3-2H9v1h1V5ZM6 5v1h1V5H6ZM4 23h8v-2H4v2Zm10-2v-1h-2v1h2Zm-1 0h8v-2h-8v2Zm9-1V7h-2v13h2ZM21 7V6H13v2H20.999L21 7Zm-7 0V6h-2v1h2Zm-2-3h-2v2h2V4Zm-1 1V3.1H9V5h2ZM9.9 2H6.1v2h3.8V2ZM5 3.1V5h2V3.1H5ZM6 4H4v2h2V4ZM2 6v15h2V6H2Zm17 3h-2v2h2V9Zm-4 0h-2v2h2V9Zm-4 0H9v2h2V9Zm-2 9h2v-2H9v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2ZM6.1 2A1.1 1.1 0 0 0 5 3.1h2a.9.9 0 0 1-.9.9V2ZM11 3.1A1.1 1.1 0 0 0 9.9 2v2a.9.9 0 0 1-.9-.9h2ZM14 6a2 2 0 0 0-2-2v2h2Zm-2 17a2 2 0 0 0 2-2h-2v2ZM4 4a2 2 0 0 0-2 2h2V4Zm0 17H2a2 2 0 0 0 2 2v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCameraRoll;
