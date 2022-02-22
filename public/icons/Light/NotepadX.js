import * as React from "react";

const SvgNotepadX = ({ title, titleId, ...props }) => (
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
      d="M6 22.6h12v-1.2H6v1.2ZM19.6 21V4h-1.2v17h1.2ZM4.4 4v17h1.2V4H4.4Zm4.1-1.6H6v1.2h2.5V2.4Zm9.5 0h-2.5v1.2H18V2.4ZM19.6 4A1.6 1.6 0 0 0 18 2.4v1.2c.22 0 .4.18.4.4h1.2ZM18 22.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM6 21.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 22.6v-1.2ZM5.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 4.4 4h1.2Z"
      fill="#555770"
    />
    <path
      d="M10.268 2.6h.346l.173-.3a1.4 1.4 0 0 1 2.426 0l.173.3H15.4v2.8H8.6V2.6h1.668ZM8 9l8 8m-8 0 8-8"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgNotepadX;
