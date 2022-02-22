import * as React from "react";

const SvgIndentTextLeft = ({ title, titleId, ...props }) => (
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
      d="M7.4 14.552V9.449L4.849 12 7.4 14.552Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M4 6.6h16V5.4H4v1.2Zm6 4h10V9.4H10v1.2Zm0 4h10v-1.2H10v1.2Zm-6 4h16v-1.2H4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgIndentTextLeft;
