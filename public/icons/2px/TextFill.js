import * as React from "react";

const SvgTextFill = ({ title, titleId, ...props }) => (
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
      d="M21 5.5h1v-1h-1v1Zm0 6.5v1h1v-1h-1Zm-10 0v-1h-1v1h1Zm-.5 9h-1v1h1v-1Zm1 0v1h1v-1h-1ZM4.1 4h13.8V2H4.1v2Zm13.8 3H4.1v2h13.8V7ZM5 7.9V3.1H3v4.8h2Zm12-4.8v2.4h2V3.1h-2Zm0 2.4v2.4h2V5.5h-2Zm4-1h-3v2h3v-2Zm-1 1V12h2V5.5h-2Zm1 5.5H11v2h10v-2Zm-11 1v2h2v-2h-2Zm0 2v7h2v-7h-2Zm1-1h-.4v2h.4v-2Zm-1.5 1.1V21h2v-6.9h-2Zm1 7.9h.5v-2h-.5v2Zm2-1v-6.9h-2V21h2Zm-1.1-8H11v2h.4v-2Zm.1 7H11v2h.5v-2ZM4.1 7a.9.9 0 0 1 .9.9H3A1.1 1.1 0 0 0 4.1 9V7Zm8.4 7.1a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2ZM17.9 9A1.1 1.1 0 0 0 19 7.9h-2a.9.9 0 0 1 .9-.9v2Zm0-5a.9.9 0 0 1-.9-.9h2A1.1 1.1 0 0 0 17.9 2v2Zm-7.3 9a1.1 1.1 0 0 0-1.1 1.1h2a.9.9 0 0 1-.9.9v-2ZM4.1 2A1.1 1.1 0 0 0 3 3.1h2a.9.9 0 0 1-.9.9V2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTextFill;
