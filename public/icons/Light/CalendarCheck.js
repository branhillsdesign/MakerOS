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
      d="m11 17-.424.424.424.425.424-.425L11 17Zm9.4-12v3.95h1.2V5h-1.2ZM3.6 8.95V5H2.4v3.95h1.2Zm17.4-.6H3v1.2h18v-1.2ZM3.6 20V8.95H2.4V20h1.2Zm.4 1.6h16v-1.2H4v1.2ZM21.6 20V8.95h-1.2V20h1.2ZM4 4.6h3V3.4H4v1.2ZM7.6 4V1H6.4v3h1.2Zm-.6.6h10V3.4H7v1.2Zm10 0h3V3.4h-3v1.2Zm.6-.6V1h-1.2v3h1.2Zm-6.176 13.424 5.5-5.5-.848-.848-5.5 5.5.848.848Zm0-.848-3-3-.848.848 3 3 .848-.848ZM2.4 20A1.6 1.6 0 0 0 4 21.6v-1.2a.4.4 0 0 1-.4-.4H2.4ZM20 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM21.6 5A1.6 1.6 0 0 0 20 3.4v1.2c.22 0 .4.18.4.4h1.2Zm-18 0c0-.22.18-.4.4-.4V3.4A1.6 1.6 0 0 0 2.4 5h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCalendarCheck;
