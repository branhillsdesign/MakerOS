import * as React from "react";

const SvgUnderline = ({ title, titleId, ...props }) => (
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
      d="M7.4 5v7h1.2V5H7.4Zm9.2 7V5h-1.2v7h1.2ZM12 16.6a4.6 4.6 0 0 0 4.6-4.6h-1.2a3.4 3.4 0 0 1-3.4 3.4v1.2ZM7.4 12a4.6 4.6 0 0 0 4.6 4.6v-1.2A3.4 3.4 0 0 1 8.6 12H7.4ZM5 19.6h14v-1.2H5v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgUnderline;
