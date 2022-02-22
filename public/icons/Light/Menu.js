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
      d="M21.4 3v18h1.2V3h-1.2ZM2.6 21V3H1.4v18h1.2Zm18.4.4h-9v1.2h9v-1.2Zm-9 0H3v1.2h9v-1.2ZM3 2.6h9V1.4H3v1.2Zm9 0h9V1.4h-9v1.2Zm.6 19.4V2h-1.2v20h1.2Zm1.9-10.4h5v-1.2h-5v1.2Zm0 3.5h5v-1.2h-5v1.2Zm0 3.5H18v-1.2h-3.5v1.2Zm-10-7h5v-1.2h-5v1.2Zm0 3.5h5v-1.2h-5v1.2Zm0 3.5H8v-1.2H4.5v1.2ZM1.4 21A1.6 1.6 0 0 0 3 22.6v-1.2a.4.4 0 0 1-.4-.4H1.4Zm20 0a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2Zm1.2-18A1.6 1.6 0 0 0 21 1.4v1.2c.22 0 .4.18.4.4h1.2Zm-20 0c0-.22.18-.4.4-.4V1.4A1.6 1.6 0 0 0 1.4 3h1.2Zm14.8 3a.4.4 0 0 1-.4.4v1.2A1.6 1.6 0 0 0 18.6 6h-1.2Zm-.4.4a.4.4 0 0 1-.4-.4h-1.2A1.6 1.6 0 0 0 17 7.6V6.4Zm-.4-.4c0-.22.18-.4.4-.4V4.4A1.6 1.6 0 0 0 15.4 6h1.2Zm.4-.4c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 17 4.4v1.2ZM7.4 6a.4.4 0 0 1-.4.4v1.2A1.6 1.6 0 0 0 8.6 6H7.4Zm-.4.4a.4.4 0 0 1-.4-.4H5.4A1.6 1.6 0 0 0 7 7.6V6.4ZM6.6 6c0-.22.18-.4.4-.4V4.4A1.6 1.6 0 0 0 5.4 6h1.2Zm.4-.4c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 7 4.4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMenu;
