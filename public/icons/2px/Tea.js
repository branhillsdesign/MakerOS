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
      d="M5 4V3H4v1h1ZM4 21h16v-2H4v2ZM20 5v3h2V5h-2Zm0 3h-3v2h3V8ZM5 5h12V3H5v2Zm12 0h3V3h-3v2Zm1 4V4h-2v5h2Zm-2 0v4h2V9h-2Zm-2 6H8v2h6v-2Zm-8-2V4H4v9h2Zm10 0a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2Zm4-5v2a2 2 0 0 0 2-2h-2ZM8 15a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4v-2ZM22 5a2 2 0 0 0-2-2v2h2Z"
      fill="#555770"
    />
    <path d="M12 4v3m0 0h-1v2h2V7h-1Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgTea;
