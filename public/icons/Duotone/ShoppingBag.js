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
      d="M20 8H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M16 7a4 4 0 0 0-8 0m8 4a4 4 0 0 1-8 0"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShoppingBag;
