import * as React from "react";

const SvgCrown = ({ title, titleId, ...props }) => (
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
      d="m2 7 2 9h16l2-9c-.833 1.333-3.2 4-6 4s-3.833-4.667-4-7c-.167 2.333-1.2 7-4 7S2.833 8.333 2 7Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M4 16v4h16v-4H4Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgCrown;
