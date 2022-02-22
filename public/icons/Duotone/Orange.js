import * as React from "react";

const SvgOrange = ({ title, titleId, ...props }) => (
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
      d="M20.455 15.077 3.545 8.923m5.378 11.532 6.154-16.91m5.378 5.378-16.91 6.154m11.532 5.378L8.922 3.545"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M20.455 15.077a8.997 8.997 0 1 1-16.91-6.154 8.998 8.998 0 1 1 16.91 6.154Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M20.455 8.923a8.997 8.997 0 1 1-16.91 6.154 8.998 8.998 0 0 1 16.91-6.154Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgOrange;
