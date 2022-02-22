import * as React from "react";

const SvgAlign = ({ title, titleId, ...props }) => (
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
      d="M4 6.6h16V5.4H4v1.2Zm0 4h16V9.4H4v1.2Zm0 4h16v-1.2H4v1.2Zm0 4h16v-1.2H4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAlign;
