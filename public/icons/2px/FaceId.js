import * as React from "react";

const SvgFaceId = ({ title, titleId, ...props }) => (
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
      d="M16 2a1 1 0 1 0 0 2V2ZM8 4a1 1 0 0 0 0-2v2Zm12 4a1 1 0 1 0 2 0h-2Zm-4 12a1 1 0 1 0 0 2v-2Zm6-4a1 1 0 1 0-2 0h2ZM8 22a1 1 0 1 0 0-2v2Zm-4-6a1 1 0 1 0-2 0h2ZM2 8a1 1 0 0 0 2 0H2Zm7 0a1 1 0 0 0-2 0h2Zm-2 2a1 1 0 1 0 2 0H7Zm10-2a1 1 0 1 0-2 0h2Zm-2 2a1 1 0 1 0 2 0h-2Zm-2-2a1 1 0 1 0-2 0h2Zm-1 5v1a1 1 0 0 0 1-1h-1Zm-1.5-1a1 1 0 1 0 0 2v-2Zm-.9 3.2A1 1 0 0 0 8.4 16.8L9.6 15.2Zm6.001 1.6a1 1 0 0 0-1.201-1.6l1.201 1.6ZM18 2h-2v2h2V2ZM8 2H6v2h2V2Zm14 6V6h-2v2h2Zm-6 14h2v-2h-2v2Zm6-4v-2h-2v2h2ZM6 22h2v-2H6v2Zm-4-6v2h2v-2H2ZM2 6v2h2V6H2Zm5 2v2h2V8H7Zm8 0v2h2V8h-2Zm-4 0v5h2V8h-2Zm1 4h-1.5v2H12v-2Zm0 4a3.978 3.978 0 0 1-2.4-.8L8.4 16.8A5.978 5.978 0 0 0 12 18v-2Zm2.4-.8c-.669.503-1.498.8-2.4.8v2c1.35 0 2.598-.447 3.601-1.2L14.4 15.2ZM18 22a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2v2ZM6 20a2 2 0 0 1-2-2H2a4 4 0 0 0 4 4v-2ZM6 2a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2V2Zm12 2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFaceId;
