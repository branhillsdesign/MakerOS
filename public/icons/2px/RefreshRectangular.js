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
      d="M4 6V5H3v1h1Zm16 12v1h1v-1h-1ZM16 5H4v2h12V5ZM3 6v9h2V6H3Zm5 13h12v-2H8v2Zm13-1V9h-2v9h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRefreshRectangular;
