import * as React from "react";

const SvgCalendarCheck = ({ title, titleId, ...props }) => (
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
      d="m11 17-.707.707.707.707.707-.707L11 17Zm9-12v3.95h2V5h-2ZM4 8.95V5H2v3.95h2Zm17-1H3v2h18v-2ZM4 20V8.95H2V20h2Zm0 2h16v-2H4v2Zm18-2V8.95h-2V20h2ZM4 5h3V3H4v2Zm4-1V1H6v3h2ZM7 5h10V3H7v2Zm10 0h3V3h-3v2Zm1-1V1h-2v3h2Zm-6.293 13.707 5.5-5.5-1.414-1.414-5.5 5.5 1.414 1.414Zm0-1.414-3-3-1.414 1.414 3 3 1.414-1.414ZM2 20a2 2 0 0 0 2 2v-2H2Zm18 2a2 2 0 0 0 2-2h-2v2Zm2-17a2 2 0 0 0-2-2v2h2ZM4 5V3a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCalendarCheck;
