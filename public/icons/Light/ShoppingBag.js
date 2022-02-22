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
      d="M4 8v-.6h-.6V8H4Zm16 0h.6v-.6H20V8ZM4 8.6h16V7.4H4v1.2ZM19.4 8v11h1.2V8h-1.2ZM18 20.4H6v1.2h12v-1.2ZM4.6 19V8H3.4v11h1.2ZM6 20.4A1.4 1.4 0 0 1 4.6 19H3.4A2.6 2.6 0 0 0 6 21.6v-1.2ZM19.4 19a1.4 1.4 0 0 1-1.4 1.4v1.2a2.6 2.6 0 0 0 2.6-2.6h-1.2ZM12 4.6A3.4 3.4 0 0 1 15.4 8h1.2A4.6 4.6 0 0 0 12 3.4v1.2Zm0-1.2A4.6 4.6 0 0 0 7.4 8h1.2A3.4 3.4 0 0 1 12 4.6V3.4Zm0 12.2a4.6 4.6 0 0 0 4.6-4.6h-1.2a3.4 3.4 0 0 1-3.4 3.4v1.2Zm0-1.2A3.4 3.4 0 0 1 8.6 11H7.4a4.6 4.6 0 0 0 4.6 4.6v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgShoppingBag;
