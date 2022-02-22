import * as React from "react";

const SvgGlassofWater = ({ title, titleId, ...props }) => (
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
      d="M4.667 9 5.9 20.11a1 1 0 0 0 .994.89h10.21a1 1 0 0 0 .994-.89L19.333 9M4.667 9 4 3h16l-.667 6M4.667 9h14.666"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M14 16.158C14 17.175 13.105 18 12 18s-2-.825-2-1.842C10 14 12 12.5 12 12.5s2 1.5 2 3.658Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGlassofWater;
