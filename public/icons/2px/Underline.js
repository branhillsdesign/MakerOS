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
      d="M7 5v7h2V5H7Zm10 7V5h-2v7h2Zm-5 5a5 5 0 0 0 5-5h-2a3 3 0 0 1-3 3v2Zm-5-5a5 5 0 0 0 5 5v-2a3 3 0 0 1-3-3H7Zm-2 8h14v-2H5v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgUnderline;
