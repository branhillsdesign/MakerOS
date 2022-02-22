import * as React from "react";

const SvgPopCorn = ({ title, titleId, ...props }) => (
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
      d="M4 7h.5M20 7h-.5m-15 0H11M4.5 7V4.5l2-.5 2 .5.5-2 3-.5 1 1.5 1.5-.5L16 1.5l2.5 1V4H20v1l-.5 2m0 0H14m0 0h-3m3 0 .5-1 1-.5M11 7V5.5l-.5-1"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 7v15m0-15h4m-4 0H8m4 15H9m3 0h3M8 7l1 15M8 7H4l2 15h3m7-15-1 15m1-15h4l-2 15h-3"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPopCorn;
