import * as React from "react";

const SvgFilmLock = ({ title, titleId, ...props }) => (
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
      d="M2 1v3m0 19v-3M22 1v3m0 19v-3M2 4h4M2 4v4m4-4V2h12v2M6 4v4M2 8h4M2 8v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m0 0v2h12v-2m0-16h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M13.65 9.75V12h1.2V9.75h-1.2Zm.6 1.65h-4.5v1.2h4.5v-1.2Zm-3.9.6V9.75h-1.2V12h1.2Zm-.6-.6H9.1v1.2h.65v-1.2Zm-1.35.7v3.4h1.2v-3.4H8.4Zm1.6 5h4v-1.2h-4v1.2Zm5.6-1.6v-3.4h-1.2v3.4h1.2Zm-.7-4.1h-.65v1.2h.65v-1.2Zm.7.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-6.5-.7a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5v-1.2Zm4.9 5.7a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm-2-9c.911 0 1.65.739 1.65 1.65h1.2A2.85 2.85 0 0 0 12 6.9v1.2Zm-3.6 7.4a1.6 1.6 0 0 0 1.6 1.6v-1.2a.4.4 0 0 1-.4-.4H8.4ZM12 6.9a2.85 2.85 0 0 0-2.85 2.85h1.2c0-.911.739-1.65 1.65-1.65V6.9Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFilmLock;
