import * as React from "react";

const SvgSunbed = ({ title, titleId, ...props }) => (
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
      d="m7 12-.424.424.175.176H7V12ZM2.18 9.028l4.396 4.396.848-.848-4.396-4.397-.849.849Zm.5-.5 3.896 3.896.848-.848-3.896-3.897-.849.849ZM7 12.6h14.5v-1.2H7v1.2Zm-.424-.024-4 4 .848.848 4-4-.848-.848ZM7 13.6h11v-1.2H7v1.2Zm11 0h3.5v-1.2H18v1.2Zm-.424-.176 4 4 .848-.848-4-4-.848.848ZM2.854 8.6a.246.246 0 0 1-.175-.072l.849-.849a.954.954 0 0 0-.674-.279v1.2ZM21.4 12.5a.1.1 0 0 1 .1-.1v1.2a1.1 1.1 0 0 0 1.1-1.1h-1.2Zm.1.1a.1.1 0 0 1-.1-.1h1.2a1.1 1.1 0 0 0-1.1-1.1v1.2ZM3.028 8.18a.246.246 0 0 1-.174.42V7.4c-.85 0-1.275 1.027-.675 1.628l.849-.849Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSunbed;
