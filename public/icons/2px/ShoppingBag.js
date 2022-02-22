import * as React from "react";

const SvgShoppingBag = ({ title, titleId, ...props }) => (
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
      d="M4 8V7H3v1h1Zm16 0h1V7h-1v1ZM4 9h16V7H4v2Zm15-1v11h2V8h-2Zm-1 12H6v2h12v-2ZM5 19V8H3v11h2Zm1 1a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3v-2Zm13-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2ZM12 4a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm0-2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3V2Zm0 14a5 5 0 0 0 5-5h-2a3 3 0 0 1-3 3v2Zm0-2a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgShoppingBag;
