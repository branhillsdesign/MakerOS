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
      d="M3.6 3.6h6.8v6.8H3.6V3.6Zm0 10h6.8v6.8H3.6v-6.8Zm10-10h6.8v6.8h-6.8V3.6Zm0 10h6.8v6.8h-6.8v-6.8Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgGridSharp;
