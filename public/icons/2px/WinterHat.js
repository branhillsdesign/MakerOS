import * as React from "react";

const SvgWinterHat = ({ title, titleId, ...props }) => (
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
      d="M4 17h16v-2H4v2Zm16 0v3h2v-3h-2Zm0 3H4v2h16v-2ZM4 20v-3H2v3h2Zm0 0H2a2 2 0 0 0 2 2v-2Zm16 0v2a2 2 0 0 0 2-2h-2Zm0-3h2a2 2 0 0 0-2-2v2ZM4 15a2 2 0 0 0-2 2h2v-2Zm1 1a7 7 0 0 1 7-7V7a9 9 0 0 0-9 9h2Zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Zm1-3a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3V7Zm-1-1a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWinterHat;
