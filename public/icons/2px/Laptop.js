import * as React from "react";

const SvgLaptop = ({ title, titleId, ...props }) => (
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
      d="M24 18H0v2h24v-2ZM22 16V6h-2v10h2ZM20 4H4v2h16V4ZM4 18h16v-2H4v2ZM2 6v10h2V6H2Zm2-2a2 2 0 0 0-2 2h2V4Zm18 2a2 2 0 0 0-2-2v2h2Zm-2 10v2a2 2 0 0 0 2-2h-2ZM4 16H2a2 2 0 0 0 2 2v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLaptop;
