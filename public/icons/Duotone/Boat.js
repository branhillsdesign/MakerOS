import * as React from "react";

const SvgBoat = ({ title, titleId, ...props }) => (
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
      d="M2 22h3c1.5 0 3-1 3-1s2 1 4 1 4-1 4-1 1.5 1 3 1h3M10 2v3h4V2h-4Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M5 11.333V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5.333m-14 0-1.912.638a.1.1 0 0 0-.066.119L4.5 18C6 18 8 15.5 8 15.5s2 2.5 4 2.5 4-2.5 4-2.5 2 2.5 3.5 2.5l1.477-5.91a.1.1 0 0 0-.065-.12L19 11.334m-14 0 6.968-2.322a.1.1 0 0 1 .064 0L19 11.333"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBoat;
