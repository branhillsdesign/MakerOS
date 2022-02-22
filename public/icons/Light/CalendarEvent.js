import * as React from "react";

const SvgCalendarEvent = ({ title, titleId, ...props }) => (
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
      d="M18 18v.6h.6V18H18Zm0-4h.6v-.6H18v.6Zm-5 0v-.6h-.6v.6h.6Zm0 4h-.6v.6h.6V18Zm7.4-13v3.95h1.2V5h-1.2ZM3.6 8.95V5H2.4v3.95h1.2Zm17.4-.6H3v1.2h18v-1.2ZM3.6 20V8.95H2.4V20h1.2Zm.4 1.6h16v-1.2H4v1.2ZM21.6 20V8.95h-1.2V20h1.2ZM4 4.6h3V3.4H4v1.2ZM7.6 4V1H6.4v3h1.2Zm-.6.6h10V3.4H7v1.2Zm10 0h3V3.4h-3v1.2Zm.6-.6V1h-1.2v3h1.2Zm.4 9.4h-5v1.2h5v-1.2Zm-5 5.2h5v-1.2h-5v1.2Zm-.6-4.6v4h1.2v-4h-1.2Zm5 0v4h1.2v-4h-1.2Zm-15 6A1.6 1.6 0 0 0 4 21.6v-1.2a.4.4 0 0 1-.4-.4H2.4ZM20 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM21.6 5A1.6 1.6 0 0 0 20 3.4v1.2c.22 0 .4.18.4.4h1.2Zm-18 0c0-.22.18-.4.4-.4V3.4A1.6 1.6 0 0 0 2.4 5h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCalendarEvent;
