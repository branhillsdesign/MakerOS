import * as React from "react";

const SvgGrid15 = ({ title, titleId, ...props }) => (
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
      d="M14 6V3h7v3h-7Zm0 15v-3h7v3h-7Zm-4-6v6H3v-6h7Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M3 11V3h7v8H3Zm11-1h7v4h-7v-4Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgGrid15;
