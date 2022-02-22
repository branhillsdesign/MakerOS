import * as React from "react";

const SvgBoxes = ({ title, titleId, ...props }) => (
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
      d="M4 10h3v3H4v-3Zm7-7h3v3h-3V3Zm0 7h3v3h-3v-3Zm0 7h3v3h-3v-3Zm7-7h3v3h-3v-3Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M4 3h3v3H4V3Zm0 14h3v3H4v-3ZM18 3h3v3h-3V3Zm0 14h3v3h-3v-3Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBoxes;
