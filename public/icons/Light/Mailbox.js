import * as React from "react";

const SvgMailbox = ({ title, titleId, ...props }) => (
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
      d="M7 1V.4h-.6V1H7Zm6 0h.6V.4H13V1Zm0 3v.6h.6V4H13ZM7 6.4H4v1.2h3V6.4ZM2.4 8v12h1.2V8H2.4ZM4 21.6h16v-1.2H4v1.2ZM21.6 20V8h-1.2v12h1.2ZM20 6.4H9.5v1.2H20V6.4ZM6.4 7v5h1.2V7H6.4ZM7 1.6h6V.4H7v1.2Zm5.4-.6v3h1.2V1h-1.2ZM7.6 7V4H6.4v3h1.2Zm0-3V1H6.4v3h1.2Zm5.4-.6H7v1.2h6V3.4ZM21.6 8A1.6 1.6 0 0 0 20 6.4v1.2c.22 0 .4.18.4.4h1.2ZM20 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM2.4 20A1.6 1.6 0 0 0 4 21.6v-1.2a.4.4 0 0 1-.4-.4H2.4ZM4 6.4A1.6 1.6 0 0 0 2.4 8h1.2c0-.22.18-.4.4-.4V6.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailbox;
