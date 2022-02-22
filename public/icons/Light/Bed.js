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
      d="M12 8v-.6h-.6V8h.6ZM1.4 5v11h1.2V5H1.4Zm0 11v4h1.2v-4H1.4Zm20 0v4h1.2v-4h-1.2Zm1.2 0v-5h-1.2v5h1.2ZM19 7.4h-7v1.2h7V7.4ZM2 16.6h10v-1.2H2v1.2Zm10 0h10v-1.2H12v1.2ZM11.4 8v8h1.2V8h-1.2Zm-1.8 3A2.6 2.6 0 0 0 7 8.4v1.2A1.4 1.4 0 0 1 8.4 11h1.2ZM7 13.6A2.6 2.6 0 0 0 9.6 11H8.4A1.4 1.4 0 0 1 7 12.4v1.2ZM4.4 11A2.6 2.6 0 0 0 7 13.6v-1.2A1.4 1.4 0 0 1 5.6 11H4.4Zm1.2 0A1.4 1.4 0 0 1 7 9.6V8.4A2.6 2.6 0 0 0 4.4 11h1.2Zm17 0A3.6 3.6 0 0 0 19 7.4v1.2a2.4 2.4 0 0 1 2.4 2.4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBed;
