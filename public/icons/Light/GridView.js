import * as React from "react";

const SvgGridView = ({ title, titleId, ...props }) => (
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
      d="M4.6 4.6h2.8v2.8H4.6V4.6Zm0 6h2.8v2.8H4.6v-2.8Zm0 6h2.8v2.8H4.6v-2.8Zm6-12h2.8v2.8h-2.8V4.6Zm0 6h2.8v2.8h-2.8v-2.8Zm0 6h2.8v2.8h-2.8v-2.8Zm6-12h2.8v2.8h-2.8V4.6Zm0 6h2.8v2.8h-2.8v-2.8Zm0 6h2.8v2.8h-2.8v-2.8Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgGridView;
