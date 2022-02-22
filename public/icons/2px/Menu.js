import * as React from "react";

const SvgMenu = ({ title, titleId, ...props }) => (
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
      d="M21 3v18h2V3h-2ZM3 21V3H1v18h2Zm18 0h-9v2h9v-2Zm-9 0H3v2h9v-2ZM3 3h9V1H3v2Zm9 0h9V1h-9v2Zm1 19V2h-2v20h2Zm1.5-10h5v-2h-5v2Zm0 3.5h5v-2h-5v2Zm0 3.5H18v-2h-3.5v2Zm-10-7h5v-2h-5v2Zm0 3.5h5v-2h-5v2Zm0 3.5H8v-2H4.5v2ZM1 21a2 2 0 0 0 2 2v-2H1Zm20 0v2a2 2 0 0 0 2-2h-2Zm2-18a2 2 0 0 0-2-2v2h2ZM3 3V1a2 2 0 0 0-2 2h2Zm14 3v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2V6Zm0 0V4a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2ZM7 6v2a2 2 0 0 0 2-2H7Zm0 0H5a2 2 0 0 0 2 2V6Zm0 0V4a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMenu;
