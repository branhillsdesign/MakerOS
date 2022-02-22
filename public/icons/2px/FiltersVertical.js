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
      d="M14 18h-4v2h4v-2ZM6 4v2h2V4H6Zm0 4v12h2V8H6Zm3 0H7v2h2V8ZM7 8H5v2h2V8Zm4-4v12h2V4h-2Zm5 0v10h2V4h-2Zm0 12v1h2v-1h-2Zm0 1v3h2v-3h-2Zm3-1h-2v2h2v-2Zm-2 0h-2v2h2v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFiltersVertical;
