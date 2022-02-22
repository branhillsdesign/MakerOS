import * as React from "react";

const SvgRefreshRectangular = ({ title, titleId, ...props }) => (
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
    <path d="m15 3 3 3-3 3V3ZM9 15l-3 3 3 3v-6Z" fill="#555770" />
    <path
      d="M4 6v-.6h-.6V6H4Zm16 12v.6h.6V18H20ZM16 5.4H4v1.2h12V5.4ZM3.4 6v9h1.2V6H3.4ZM8 18.6h12v-1.2H8v1.2Zm12.6-.6V9h-1.2v9h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRefreshRectangular;
