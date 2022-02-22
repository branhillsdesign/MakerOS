import * as React from "react";

const SvgIcecream = ({ title, titleId, ...props }) => (
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
      d="M12.249 7.014A4.48 4.48 0 0 0 11.528 10m.72-2.986a4.496 4.496 0 0 1 3.999-2.007m-3.998 2.007a4.503 4.503 0 0 0-3.996-3.007M11.528 10H4a4.493 4.493 0 0 1-.256-1.5C3.744 6.015 5.514 4 8 4c.085 0 .17.002.253.007M11.528 10H20c.018-.164.028-.331.028-.5 0-2.403-1.41-4.366-3.781-4.493m0 0a4.502 4.502 0 0 0-7.994-1"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 17c-7.6 0-9-4-9-7h18c0 3-1.4 7-9 7Zm0 0v5m0 0H6m6 0h6"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgIcecream;
