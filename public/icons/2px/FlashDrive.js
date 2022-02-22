import * as React from "react";

const SvgFlashDrive = ({ title, titleId, ...props }) => (
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
      d="M18 21v1h1v-1h-1ZM6 21H5v1h1v-1ZM8 4V3H7v1h1Zm8 0h1V3h-1v1Zm1 6v11h2V10h-2Zm1 10H6v2h12v-2ZM7 21V10H5v11h2Zm0-11h1V8H7v2Zm2-1V4H7v5h2ZM8 5h8V3H8v2Zm0 5h8V8H8v2Zm8 0h1V8h-1v2Zm-1-6v5h2V4h-2Zm4 6a2 2 0 0 0-2-2v2h2ZM7 10V8a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFlashDrive;
