import * as React from "react";

const SvgBed = ({ title, titleId, ...props }) => (
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
      d="M12 8V7h-1v1h1ZM1 5v11h2V5H1Zm0 11v4h2v-4H1Zm20 0v4h2v-4h-2Zm2 0v-5h-2v5h2Zm-4-9h-7v2h7V7ZM2 17h10v-2H2v2Zm10 0h10v-2H12v2Zm-1-9v8h2V8h-2Zm-1 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm-3 3a3 3 0 0 0 3-3H8a1 1 0 0 1-1 1v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H4Zm2 0a1 1 0 0 1 1-1V8a3 3 0 0 0-3 3h2Zm17 0a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBed;
