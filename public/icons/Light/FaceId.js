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
      d="M16 2.4a.6.6 0 1 0 0 1.2V2.4ZM8 3.6a.6.6 0 0 0 0-1.2v1.2ZM20.4 8a.6.6 0 1 0 1.2 0h-1.2ZM16 20.4a.6.6 0 1 0 0 1.2v-1.2Zm5.6-4.4a.6.6 0 1 0-1.2 0h1.2ZM8 21.6a.6.6 0 1 0 0-1.2v1.2ZM3.6 16a.6.6 0 1 0-1.2 0h1.2ZM2.4 8a.6.6 0 0 0 1.2 0H2.4Zm6.2 0a.6.6 0 0 0-1.2 0h1.2Zm-1.2 2a.6.6 0 1 0 1.2 0H7.4Zm9.2-2a.6.6 0 1 0-1.2 0h1.2Zm-1.2 2a.6.6 0 1 0 1.2 0h-1.2Zm-2.8-2a.6.6 0 1 0-1.2 0h1.2Zm-.6 5v.6a.6.6 0 0 0 .6-.6H12Zm-1.5-.6a.6.6 0 1 0 0 1.2v-1.2Zm-1.14 3.12a.6.6 0 0 0-.72.96l.72-.96Zm6 .96a.6.6 0 0 0-.72-.96l.72.96ZM18 2.4h-2v1.2h2V2.4Zm-10 0H6v1.2h2V2.4ZM21.6 8V6h-1.2v2h1.2ZM16 21.6h2v-1.2h-2v1.2Zm5.6-3.6v-2h-1.2v2h1.2ZM6 21.6h2v-1.2H6v1.2ZM2.4 16v2h1.2v-2H2.4Zm0-10v2h1.2V6H2.4Zm5 2v2h1.2V8H7.4Zm8 0v2h1.2V8h-1.2Zm-4 0v5h1.2V8h-1.2Zm.6 4.4h-1.5v1.2H12v-1.2Zm0 4a4.378 4.378 0 0 1-2.64-.88l-.72.96c.935.703 2.1 1.12 3.36 1.12v-1.2Zm2.64-.88a4.378 4.378 0 0 1-2.64.88v1.2c1.26 0 2.425-.417 3.36-1.12l-.72-.96ZM18 21.6a3.6 3.6 0 0 0 3.6-3.6h-1.2a2.4 2.4 0 0 1-2.4 2.4v1.2ZM6 20.4A2.4 2.4 0 0 1 3.6 18H2.4A3.6 3.6 0 0 0 6 21.6v-1.2Zm0-18A3.6 3.6 0 0 0 2.4 6h1.2A2.4 2.4 0 0 1 6 3.6V2.4Zm12 1.2A2.4 2.4 0 0 1 20.4 6h1.2A3.6 3.6 0 0 0 18 2.4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFaceId;