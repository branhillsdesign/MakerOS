import * as React from "react";

const SvgHook = ({ title, titleId, ...props }) => (
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
      d="m17 14 .424-.424-1.024-1.024V14h.6Zm.5.5v.6h1.448l-1.024-1.024-.424.424ZM9.4 4A1.4 1.4 0 0 1 8 5.4v1.2A2.6 2.6 0 0 0 10.6 4H9.4ZM8 5.4A1.4 1.4 0 0 1 6.6 4H5.4A2.6 2.6 0 0 0 8 6.6V5.4ZM6.6 4A1.4 1.4 0 0 1 8 2.6V1.4A2.6 2.6 0 0 0 5.4 4h1.2ZM8 2.6A1.4 1.4 0 0 1 9.4 4h1.2A2.6 2.6 0 0 0 8 1.4v1.2ZM7.4 6v11.5h1.2V6H7.4Zm9.176 8.424.5.5.848-.848-.5-.5-.848.848ZM16.4 14v.5h1.2V14h-1.2Zm1.1-.1H17v1.2h.5v-1.2Zm-1.1.6v3h1.2v-3h-1.2Zm0 3a3.9 3.9 0 0 1-3.9 3.9v1.2a5.1 5.1 0 0 0 5.1-5.1h-1.2Zm-9 0a5.1 5.1 0 0 0 5.1 5.1v-1.2a3.9 3.9 0 0 1-3.9-3.9H7.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHook;
