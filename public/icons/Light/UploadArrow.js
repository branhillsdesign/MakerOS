import * as React from "react";

const SvgUploadArrow = ({ title, titleId, ...props }) => (
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
      d="M3 21h18M9 17V6H8l4-3 4 3h-1v11H9Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgUploadArrow;
