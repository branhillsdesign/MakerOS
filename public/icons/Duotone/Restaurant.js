import * as React from "react";

const SvgRestaurant = ({ title, titleId, ...props }) => (
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
      d="M4 2v8m0 0h4m-4 0c0 1 1 2 4 2m0-2h4m-4 0V2m4 8V2m0 8c0 1-1 2-4 2m0 0v10"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M20 22v-9m0 0V3a2.72 2.72 0 0 0-1.5.44M20 13h-1.5m0 0H17V6c0-.707.5-1.914 1.5-2.56m0 9.56V3.44"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRestaurant;
