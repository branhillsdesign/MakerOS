import * as React from "react";

const SvgWatch5 = ({ title, titleId, ...props }) => (
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
      d="M14.958 7c-.091-1.25-.348-3.141-.935-4.932A.1.1 0 0 0 13.928 2h-3.856a.1.1 0 0 0-.095.068C9.39 3.858 9.133 5.751 9.042 7m0 10c.091 1.25.348 3.141.935 4.932a.1.1 0 0 0 .095.068h3.856a.1.1 0 0 0 .095-.068c.587-1.79.844-3.683.935-4.932"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M7 8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWatch5;
