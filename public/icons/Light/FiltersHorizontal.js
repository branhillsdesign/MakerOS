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
      d="M18.4 10v4h1.2v-4h-1.2ZM4 17.6h2.5v-1.2H4v1.2Zm5 0h11v-1.2H9v1.2ZM8.4 15v2h1.2v-2H8.4Zm0 2v2h1.2v-2H8.4ZM4 12.6h12.5v-1.2H4v1.2Zm0-5h4.5V6.4H4v1.2Zm7 0h9V6.4h-9v1.2ZM10.4 5v2h1.2V5h-1.2Zm0 2v2h1.2V7h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFiltersHorizontal;
