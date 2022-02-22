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
    <path d="M16 6H4v9m4 3h12V9" stroke="currentColor" strokeWidth={2} />
    <path d="m15 3 3 3-3 3V3ZM9 15l-3 3 3 3v-6Z" fill="#555770" />
  </svg>
);

export default SvgRefreshRectangular;
