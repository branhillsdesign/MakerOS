import * as React from "react";

const SvgFiltersHorizontal = ({ title, titleId, ...props }) => (
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
      d="M18 10v4h2v-4h-2ZM4 18h2v-2H4v2Zm4 0h12v-2H8v2Zm0-3v2h2v-2H8Zm0 2v2h2v-2H8Zm-4-4h12v-2H4v2Zm0-5h4V6H4v2Zm6 0h1V6h-1v2Zm1 0h9V6h-9v2Zm-1-3v2h2V5h-2Zm0 2v2h2V7h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFiltersHorizontal;
