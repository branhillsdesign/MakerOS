import * as React from "react";

const SvgCentralAlign = ({ title, titleId, ...props }) => (
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
      d="M6 7h12V5H6v2Zm-2 4h16V9H4v2Zm2 4h12v-2H6v2Zm-1 4h14v-2H5v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCentralAlign;
