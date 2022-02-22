import * as React from "react";

const SvgHome = ({ title, titleId, ...props }) => (
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
      d="M4.6 12v-.6H3.449L12 2.849l8.552 8.551H19.4v10h-5.3v-7H9.9v7H4.6V12Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgHome;
