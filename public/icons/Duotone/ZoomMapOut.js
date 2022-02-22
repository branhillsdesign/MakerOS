import * as React from "react";

const SvgZoomMapOut = ({ title, titleId, ...props }) => (
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
      d="M9 9 5.5 5.5M9 15l-3.5 3.5M15 15l3.5 3.5M15 9l3.5-3.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M20 4h-3l1.5 1.5L20 7V4ZM20 17l-1.5 1.5L17 20h3v-3ZM7 20l-1.5-1.5L4 17v3h3ZM4 7l1.5-1.5L7 4H4v3Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgZoomMapOut;
