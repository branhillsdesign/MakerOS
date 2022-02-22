import * as React from "react";

const SvgLemonade = ({ title, titleId, ...props }) => (
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
      d="M16 21H8v2h8v-2Zm-8 0V7H6v14h2ZM8 7V3H6v4h2Zm8-4v4h2V3h-2Zm0 4v14h2V7h-2ZM7 8h10V6H7v2ZM14.037.732l-5 18 1.926.536 5-18-1.926-.536ZM8 21H6a2 2 0 0 0 2 2v-2Zm8 2a2 2 0 0 0 2-2h-2v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLemonade;
