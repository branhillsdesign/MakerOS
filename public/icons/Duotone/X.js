import * as React from "react";

const SvgX = ({ title, titleId, ...props }) => (
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
      d="M17.657 17.657 12 12 6.343 6.343"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M17.657 6.343 12 12l-5.657 5.657"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgX;
