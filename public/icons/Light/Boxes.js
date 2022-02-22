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
      d="M3.6 2.6h3.8v3.8H3.6V2.6Zm0 7h3.8v3.8H3.6V9.6Zm0 7h3.8v3.8H3.6v-3.8Zm7-14h3.8v3.8h-3.8V2.6Zm0 7h3.8v3.8h-3.8V9.6Zm0 7h3.8v3.8h-3.8v-3.8Zm7-14h3.8v3.8h-3.8V2.6Zm0 7h3.8v3.8h-3.8V9.6Zm0 7h3.8v3.8h-3.8v-3.8Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgBoxes;
