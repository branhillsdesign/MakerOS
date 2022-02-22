import * as React from "react";

const SvgItalicAlign = ({ title, titleId, ...props }) => (
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
      d="M7 6.6h13V5.4H7v1.2Zm-1 4h13V9.4H6v1.2Zm-1 4h13v-1.2H5v1.2Zm-1 4h13v-1.2H4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgItalicAlign;
