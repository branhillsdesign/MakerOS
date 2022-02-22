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
      d="M21.6 18V6h-1.2v12h1.2ZM20 4.4H4v1.2h16V4.4ZM4 19.6h16v-1.2H4v1.2ZM2.4 6v12h1.2V6H2.4ZM4 4.4A1.6 1.6 0 0 0 2.4 6h1.2c0-.22.18-.4.4-.4V4.4ZM21.6 6A1.6 1.6 0 0 0 20 4.4v1.2c.22 0 .4.18.4.4h1.2Zm-1.2 12a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2ZM4 18.4a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 19.6v-1.2ZM13.65 10.25V12h1.2v-1.75h-1.2Zm.6 1.15h-4.5v1.2h4.5v-1.2Zm-3.9.6v-1.75h-1.2V12h1.2Zm-.6-.6H9.1v1.2h.65v-1.2Zm-1.35.7V15h1.2v-2.9H8.4Zm1.6 4.5h4v-1.2h-4v1.2Zm5.6-1.6v-2.9h-1.2V15h1.2Zm-.7-3.6h-.65v1.2h.65v-1.2Zm.7.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-6.5-.7a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5v-1.2Zm4.9 5.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm-2-8c.911 0 1.65.739 1.65 1.65h1.2A2.85 2.85 0 0 0 12 7.4v1.2ZM8.4 15a1.6 1.6 0 0 0 1.6 1.6v-1.2a.4.4 0 0 1-.4-.4H8.4ZM12 7.4a2.85 2.85 0 0 0-2.85 2.85h1.2c0-.911.739-1.65 1.65-1.65V7.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTabletLocked;
