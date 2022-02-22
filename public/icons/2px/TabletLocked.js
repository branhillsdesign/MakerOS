import * as React from "react";

const SvgTabletLocked = ({ title, titleId, ...props }) => (
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
      d="M22 18V6h-2v12h2ZM20 4H4v2h16V4ZM4 20h16v-2H4v2ZM2 6v12h2V6H2Zm2-2a2 2 0 0 0-2 2h2V4Zm18 2a2 2 0 0 0-2-2v2h2Zm-2 12v2a2 2 0 0 0 2-2h-2ZM4 18H2a2 2 0 0 0 2 2v-2ZM13.25 10.25V12h2v-1.75h-2Zm1 .75h-4.5v2h4.5v-2Zm-3.5 1v-1.75h-2V12h2Zm-1-1H9.1v2h.65v-2ZM8 12.1V15h2v-2.9H8Zm2 4.9h4v-2h-4v2Zm6-2v-2.9h-2V15h2Zm-1.1-4h-.65v2h.65v-2Zm1.1 1.1a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2ZM9.1 11A1.1 1.1 0 0 0 8 12.1h2a.9.9 0 0 1-.9.9v-2Zm4.9 6a2 2 0 0 0 2-2h-2v2Zm-2-8c.69 0 1.25.56 1.25 1.25h2A3.25 3.25 0 0 0 12 7v2Zm-4 6a2 2 0 0 0 2 2v-2H8Zm4-8a3.25 3.25 0 0 0-3.25 3.25h2c0-.69.56-1.25 1.25-1.25V7Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTabletLocked;
