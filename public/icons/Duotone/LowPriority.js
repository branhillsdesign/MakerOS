import * as React from "react";

const SvgLowPriority = ({ title, titleId, ...props }) => (
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
    <path d="M9 20v-6l3 3-3 3Z" fill="#555770" />
    <path
      d="M22 6h-8m8 5.5h-8m8 5.5h-8"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 6H8.5a5.5 5.5 0 1 0 0 11H10"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLowPriority;
