import * as React from "react";

const SvgMemory = ({ title, titleId, ...props }) => (
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
      d="M10 10v-.6h-.6v.6h.6Zm0 4h-.6v.6h.6V14Zm4 0v.6h.6V14H14Zm0-4h.6v-.6H14v.6Zm-4.6 0v4h1.2v-4H9.4Zm.6 4.6h4v-1.2h-4v1.2Zm4.6-.6v-4h-1.2v4h1.2ZM14 9.4h-4v1.2h4V9.4Zm-4-4H7v1.2h3V5.4ZM9.4 3v3h1.2V3H9.4ZM17 5.4h-3v1.2h3V5.4Zm-3 0h-4v1.2h4V5.4ZM13.4 3v3h1.2V3h-1.2Zm5.2 7V7h-1.2v3h1.2Zm2.4-.6h-3v1.2h3V9.4ZM18.6 17v-3h-1.2v3h1.2Zm0-3v-4h-1.2v4h1.2Zm2.4-.6h-3v1.2h3v-1.2Zm-7 5.2h3v-1.2h-3v1.2Zm.6 2.4v-3h-1.2v3h1.2ZM7 18.6h3v-1.2H7v1.2Zm3 0h4v-1.2h-4v1.2Zm.6 2.4v-3H9.4v3h1.2Zm-5.2-7v3h1.2v-3H5.4Zm-2.4.6h3v-1.2H3v1.2ZM5.4 7v3h1.2V7H5.4Zm0 3v4h1.2v-4H5.4Zm-2.4.6h3V9.4H3v1.2Zm14-4c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 17 5.4v1.2Zm.4 10.4a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2ZM7 17.4a.4.4 0 0 1-.4-.4H5.4A1.6 1.6 0 0 0 7 18.6v-1.2Zm0-12A1.6 1.6 0 0 0 5.4 7h1.2c0-.22.18-.4.4-.4V5.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMemory;
