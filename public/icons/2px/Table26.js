import * as React from "react";

const SvgTable26 = ({ title, titleId, ...props }) => (
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
      d="M20 11h-7V4h7v7Zm-9-7v7H4V4h7Zm-7 9h7v7H4v-7Zm9 0h7v7h-7v-7Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTable26;
