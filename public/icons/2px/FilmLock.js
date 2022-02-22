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
      strokeWidth={2}
    />
    <path
      d="M13.25 9.75V12h2V9.75h-2Zm1 1.25h-4.5v2h4.5v-2Zm-3.5 1V9.75h-2V12h2Zm-1-1H9.1v2h.65v-2ZM8 12.1v3.4h2v-3.4H8Zm2 5.4h4v-2h-4v2Zm6-2v-3.4h-2v3.4h2ZM14.9 11h-.65v2h.65v-2Zm1.1 1.1a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2ZM9.1 11A1.1 1.1 0 0 0 8 12.1h2a.9.9 0 0 1-.9.9v-2Zm4.9 6.5a2 2 0 0 0 2-2h-2v2Zm-2-9c.69 0 1.25.56 1.25 1.25h2A3.25 3.25 0 0 0 12 6.5v2Zm-4 7a2 2 0 0 0 2 2v-2H8Zm4-9a3.25 3.25 0 0 0-3.25 3.25h2c0-.69.56-1.25 1.25-1.25v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFilmLock;
