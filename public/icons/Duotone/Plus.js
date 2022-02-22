import * as React from "react";

const SvgPlus = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 3 3 21V3h18ZM7.536 5v2.536H5v2h2.536v2.535h2V9.536h2.535v-2H9.536V5h-2Z"
      fill="currentColor"
    />
    <path d="M3 3h18v18H3V3Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgPlus;
