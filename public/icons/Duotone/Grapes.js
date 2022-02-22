import * as React from "react";

const SvgGrapes = ({ title, titleId, ...props }) => (
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
    <path d="M12 4c.333-.833 1.2-2.6 2-3" stroke="#555770" strokeWidth={2} />
    <path
      d="M9 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0a3 3 0 1 0 6 0M9 7a3 3 0 1 1 6 0m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGrapes;
