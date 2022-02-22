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
      d="M21 5.5h.6v-.6H21v.6Zm0 6.5v.6h.6V12H21Zm-10 0v-.6h-.6v.6h.6Zm-.5 9h-.6v.6h.6V21Zm1 0v.6h.6V21h-.6ZM4.1 3.6h13.8V2.4H4.1v1.2Zm13.8 3.8H4.1v1.2h13.8V7.4Zm-13.3.5V3.1H3.4v4.8h1.2Zm12.8-4.8v2.4h1.2V3.1h-1.2Zm0 2.4v2.4h1.2V5.5h-1.2Zm3.6-.6h-3v1.2h3V4.9Zm-.6.6V12h1.2V5.5h-1.2Zm.6 5.9H11v1.2h10v-1.2Zm-10.6.6v2h1.2v-2h-1.2Zm.6 1.4h-.4v1.2h.4v-1.2Zm-1.1.7V21h1.2v-6.9H9.9Zm.6 7.5h.5v-1.2h-.5v1.2Zm1.6-.6v-6.9h-1.2V21h1.2Zm-.7-7.6H11v1.2h.4v-1.2Zm.1 7H11v1.2h.5v-1.2Zm-7.4-13a.5.5 0 0 1 .5.5H3.4a.7.7 0 0 0 .7.7V7.4Zm8 6.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm5.8-5.5a.7.7 0 0 0 .7-.7h-1.2a.5.5 0 0 1 .5-.5v1.2Zm0-5a.5.5 0 0 1-.5-.5h1.2a.7.7 0 0 0-.7-.7v1.2Zm-7.3 9.8a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5v-1.2Zm-6.5-11a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5V2.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTextFill;
