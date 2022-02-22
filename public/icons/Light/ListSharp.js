import * as React from "react";

const SvgListSharp = ({ title, titleId, ...props }) => (
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
      d="M2.6 3.6h2.8v2.8H2.6V3.6Zm0 7h2.8v2.8H2.6v-2.8Zm0 7h2.8v2.8H2.6v-2.8Zm6-14h12.8v2.8H8.6V3.6Zm0 7h12.8v2.8H8.6v-2.8Zm0 7h12.8v2.8H8.6v-2.8Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgListSharp;
