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
      d="M17 17v1h1v-1h-1Zm0-3h1v-1h-1v1Zm-3 0v-1h-1v1h1Zm0 3h-1v1h1v-1Zm6-12v3.95h2V5h-2ZM4 8.95V5H2v3.95h2Zm17-1H3v2h18v-2ZM4 20V8.95H2V20h2Zm0 2h16v-2H4v2Zm18-2V8.95h-2V20h2ZM4 5h3V3H4v2Zm4-1V1H6v3h2ZM7 5h10V3H7v2Zm10 0h3V3h-3v2Zm1-1V1h-2v3h2Zm-1 9h-3v2h3v-2Zm-3 5h3v-2h-3v2Zm-1-4v1.5h2V14h-2Zm0 1.5V17h2v-1.5h-2Zm3-1.5v1.5h2V14h-2Zm0 1.5V17h2v-1.5h-2Zm-2 1h3v-2h-3v2ZM2 20a2 2 0 0 0 2 2v-2H2Zm18 2a2 2 0 0 0 2-2h-2v2Zm2-17a2 2 0 0 0-2-2v2h2ZM4 5V3a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCalendarEvent;
