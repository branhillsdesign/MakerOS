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
      d="M5 11h2v2H5v-2Zm6-6h2v2h-2V5Zm0 6h2v2h-2v-2Zm0 6h2v2h-2v-2Zm6-6h2v2h-2v-2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M5 5h2v2H5V5Zm0 12h2v2H5v-2ZM17 5h2v2h-2V5Zm0 12h2v2h-2v-2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGridView;
