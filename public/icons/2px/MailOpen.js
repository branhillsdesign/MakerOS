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
      d="m2 7-.447-.894A1 1 0 0 0 1 7h1Zm20 0h1a1 1 0 0 0-.553-.894L22 7ZM12 2l.447-.894L12 .882l-.447.224L12 2Zm0 10-.447.894.447.224.447-.224L12 12Zm9 8H3v2h18v-2Zm0-13v13h2V7h-2ZM3 20V7H1v13h2ZM2.447 7.894l10-5-.894-1.788-10 5 .894 1.788Zm9.106-5 10 5 .894-1.788-10-5-.894 1.788Zm10 3.212-10 5 .894 1.788 10-5-.894-1.788Zm-9.106 5-10-5-.894 1.788 10 5 .894-1.788ZM3 20H1a2 2 0 0 0 2 2v-2Zm18 2a2 2 0 0 0 2-2h-2v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailOpen;
