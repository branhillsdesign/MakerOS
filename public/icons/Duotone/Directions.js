import * as React from "react";

const SvgDirections = ({ title, titleId, ...props }) => (
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
    <path d="M12 7v3m0 5v9" stroke="currentColor" strokeWidth={2} />
    <path
      d="M8 7V2h10l2.5 2.5L18 7H8ZM16 15v-5H6l-2.5 2.5L6 15h10Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDirections;
