import * as React from "react";

const SvgResize = ({ title, titleId, ...props }) => (
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
      d="M4.5 7.5v-.6h-.6v.6h.6Zm15 9v.6h.6v-.6h-.6ZM3 5.6h18V4.4H3v1.2Zm18.4.4v12h1.2V6h-1.2ZM21 18.4H3v1.2h18v-1.2ZM2.6 18V6H1.4v12h1.2Zm2.5-6.5v-4H3.9v4h1.2Zm-.6-3.4h4V6.9h-4v1.2Zm14.4 4.4v4h1.2v-4h-1.2Zm.6 3.4h-4v1.2h4v-1.2ZM3 18.4a.4.4 0 0 1-.4-.4H1.4A1.6 1.6 0 0 0 3 19.6v-1.2Zm18.4-.4a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2ZM21 5.6c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 21 4.4v1.2ZM3 4.4A1.6 1.6 0 0 0 1.4 6h1.2c0-.22.18-.4.4-.4V4.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgResize;
