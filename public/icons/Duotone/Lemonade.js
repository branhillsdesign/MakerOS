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
    <path d="M7 7h10m-2-6-5 18" stroke="currentColor" strokeWidth={2} />
    <path
      d="M7 3v18a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLemonade;
