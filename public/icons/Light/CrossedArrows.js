import * as React from "react";

const SvgCrossedArrows = ({ title, titleId, ...props }) => (
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
      d="M19.4 19.4h-2.951l2.951-2.951V19.4ZM19.4 4.6h-2.951L19.4 7.551V4.6ZM5 5l4.88 4.88M19 19l-4.88-4.88M5 19 19 5"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgCrossedArrows;
