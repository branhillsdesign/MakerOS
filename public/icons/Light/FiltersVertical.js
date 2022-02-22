import * as React from "react";

const SvgFiltersVertical = ({ title, titleId, ...props }) => (
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
      d="M14 18.4h-4v1.2h4v-1.2ZM6.4 4v2.5h1.2V4H6.4Zm0 5v11h1.2V9H6.4ZM9 8.4H7v1.2h2V8.4Zm-2 0H5v1.2h2V8.4ZM11.4 4v12.5h1.2V4h-1.2Zm5 0v10.5h1.2V4h-1.2Zm0 13v3h1.2v-3h-1.2Zm2.6-.6h-2v1.2h2v-1.2Zm-2 0h-2v1.2h2v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFiltersVertical;
