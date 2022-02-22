import * as React from "react";

const SvgTea = ({ title, titleId, ...props }) => (
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
      d="M5 4v-.6h-.6V4H5ZM4 20.6h16v-1.2H4v1.2ZM20.4 5v3h1.2V5h-1.2ZM20 8.4h-3v1.2h3V8.4ZM5 4.6h12V3.4H5v1.2Zm12 0h3V3.4h-3v1.2Zm.6 4.4V4h-1.2v5h1.2Zm-1.2 0v4h1.2V9h-1.2ZM14 15.4H8v1.2h6v-1.2ZM5.6 13V4H4.4v9h1.2Zm10.8 0a2.4 2.4 0 0 1-2.4 2.4v1.2a3.6 3.6 0 0 0 3.6-3.6h-1.2Zm4-5a.4.4 0 0 1-.4.4v1.2A1.6 1.6 0 0 0 21.6 8h-1.2ZM8 15.4A2.4 2.4 0 0 1 5.6 13H4.4A3.6 3.6 0 0 0 8 16.6v-1.2ZM21.6 5A1.6 1.6 0 0 0 20 3.4v1.2c.22 0 .4.18.4.4h1.2Z"
      fill="#555770"
    />
    <path
      d="M12 4v3m0 0h-1.398v2.414h2.79V7H12Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgTea;
