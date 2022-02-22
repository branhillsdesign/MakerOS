import * as React from "react";

const SvgHamburgerMenu = ({ title, titleId, ...props }) => (
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
    <path d="M4 8h16V6H4v2Zm0 5h16v-2H4v2Zm0 5h16v-2H4v2Z" fill="#555770" />
  </svg>
);

export default SvgHamburgerMenu;
