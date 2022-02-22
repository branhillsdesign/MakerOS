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
      d="M7 1V0H6v1h1Zm6 0h1V0h-1v1Zm0 2v1h1V3h-1ZM7 6H4v2h3V6ZM2 8v12h2V8H2Zm2 14h16v-2H4v2Zm18-2V8h-2v12h2ZM20 6H10v2h10V6ZM6 7v5h2V7H6Zm1-5h6V0H7v2Zm5-1v2h2V1h-2ZM8 7V3H6v4h2Zm0-4V1H6v2h2Zm5-1H7v2h6V2Zm9 6a2 2 0 0 0-2-2v2h2Zm-2 14a2 2 0 0 0 2-2h-2v2ZM2 20a2 2 0 0 0 2 2v-2H2ZM4 6a2 2 0 0 0-2 2h2V6Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailbox;
