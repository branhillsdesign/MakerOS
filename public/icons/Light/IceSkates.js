import * as React from "react";

const SvgIceSkates = ({ title, titleId, ...props }) => (
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
      d="M2.4 14c0 .93.274 2.31 1.113 3.476C4.374 18.672 5.804 19.6 8 19.6v-1.2c-1.804 0-2.874-.738-3.513-1.626-.66-.917-.887-2.037-.887-2.774H2.4ZM17 19.6H21v-1.2H17v1.2Zm.6-.6v-3h-1.2v3h1.2Zm-9.6.6H11v-1.2H8v1.2Zm3 0H17v-1.2H11v1.2Zm.6-.6v-3h-1.2v3h1.2Zm5.4-3.6h-6v1.2h6v-1.2Zm-6 0H9.5v1.2H11v-1.2Zm3.1-10.3h5.8V3.9h-5.8v1.2ZM18 15.4h-1v1.2h1v-1.2Zm-3.4-5.5V7.5h-1.2v2.4h1.2Zm0-2.4V4.6h-1.2v2.9h1.2Zm4.8-2.9v2.9h1.2V4.6h-1.2Zm0 2.9V14h1.2V7.5h-1.2Zm-5.4.6h6V6.9h-6v1.2Zm-4.5 2.5h.5V9.4h-.5v1.2Zm-.1-.6v2h1.2v-2H9.4Zm.6.6h3V9.4h-3v1.2Zm3 0h.9V9.4H13v1.2Zm-.6-.6v2h1.2v-2h-1.2Zm5.6 6.6a2.6 2.6 0 0 0 2.6-2.6h-1.2a1.4 1.4 0 0 1-1.4 1.4v1.2Zm1.9-11.5a.5.5 0 0 1-.5-.5h1.2a.7.7 0 0 0-.7-.7v1.2Zm-5.8-1.2a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5V3.9Zm-.7 6a.5.5 0 0 1 .5-.5v1.2a.7.7 0 0 0 .7-.7h-1.2ZM7.1 13a2.4 2.4 0 0 1 2.4-2.4V9.4A3.6 3.6 0 0 0 5.9 13h1.2Zm2.4 2.4A2.4 2.4 0 0 1 7.1 13H5.9a3.6 3.6 0 0 0 3.6 3.6v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgIceSkates;
