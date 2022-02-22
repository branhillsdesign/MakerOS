import * as React from "react";

const SvgGridSharp = ({ title, titleId, ...props }) => (
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
      d="M4 4h6v6H4V4Zm0 10h6v6H4v-6ZM14 4h6v6h-6V4Zm0 10h6v6h-6v-6Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGridSharp;
