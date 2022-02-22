import * as React from "react";

const SvgSyringe = ({ title, titleId, ...props }) => (
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
      d="m17 3 1 1m3 3-1-1m-2-2-3.5 3.5M18 4l2 2m-5.5 1.5L14 7m.5.5L17 10m3-4-3.5 3.5m2 2L17 10m-4.5-4.5L14 7m0 0-8 8 2 2m9-7-8 8-1-1m0 0-5 5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSyringe;
