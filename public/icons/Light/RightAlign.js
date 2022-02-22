import * as React from "react";

const SvgRightAlign = ({ title, titleId, ...props }) => (
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
      d="M8 6.6h12V5.4H8v1.2Zm-4 4h16V9.4H4v1.2Zm4 4h12v-1.2H8v1.2Zm-2 4h14v-1.2H6v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRightAlign;