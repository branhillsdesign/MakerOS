import * as React from "react";

const SvgSailingBoat = ({ title, titleId, ...props }) => (
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
      d="m7 16 3-13c7.6 2.4 6.833 9.667 6 13H7Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 19H3c0 1 1 2 2 2h11c3 0 4-1 5-2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSailingBoat;
