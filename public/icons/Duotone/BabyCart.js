import * as React from "react";

const SvgBabyCart = ({ title, titleId, ...props }) => (
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
      d="M3 10h2l1.15 2m0 0h14.7a7.49 7.49 0 0 1-2.253 4.002 2.5 2.5 0 0 0-2.387 1.494A7.48 7.48 0 0 1 13.5 18a7.48 7.48 0 0 1-2.71-.505 2.5 2.5 0 0 0-2.387-1.493A7.49 7.49 0 0 1 6.15 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M11 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM21 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBabyCart;
