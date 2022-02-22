import * as React from "react";

const SvgMailOpen = ({ title, titleId, ...props }) => (
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
      d="m2 7-.268-.537A.6.6 0 0 0 1.4 7H2Zm20 0h.6a.6.6 0 0 0-.332-.537L22 7ZM12 2l.268-.537L12 1.33l-.268.134L12 2Zm0 10-.268.537.268.134.268-.134L12 12Zm9 8.4H3v1.2h18v-1.2ZM21.4 7v13h1.2V7h-1.2ZM2.6 20V7H1.4v13h1.2ZM2.268 7.537l10-5-.536-1.074-10 5 .536 1.074Zm9.464-5 10 5 .536-1.074-10-5-.536 1.074Zm10 3.926-10 5 .536 1.074 10-5-.536-1.074Zm-9.464 5-10-5-.536 1.074 10 5 .536-1.074ZM3 20.4a.4.4 0 0 1-.4-.4H1.4A1.6 1.6 0 0 0 3 21.6v-1.2Zm18 1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailOpen;
