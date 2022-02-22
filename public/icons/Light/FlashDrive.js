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
      d="M18 21v.6h.6V21H18ZM6 21h-.6v.6H6V21ZM8 4v-.6h-.6V4H8Zm8 0h.6v-.6H16V4Zm1.4 6v11h1.2V10h-1.2Zm.6 10.4H6v1.2h12v-1.2ZM6.6 21V10H5.4v11h1.2ZM7 9.6h1V8.4H7v1.2ZM8.6 9V4H7.4v5h1.2ZM8 4.6h8V3.4H8v1.2Zm0 5h8V8.4H8v1.2Zm8 0h1V8.4h-1v1.2ZM15.4 4v5h1.2V4h-1.2Zm3.2 6A1.6 1.6 0 0 0 17 8.4v1.2c.22 0 .4.18.4.4h1.2Zm-12 0c0-.22.18-.4.4-.4V8.4A1.6 1.6 0 0 0 5.4 10h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFlashDrive;
