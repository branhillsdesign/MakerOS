import * as React from "react";

const SvgBandage = ({ title, titleId, ...props }) => (
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
      d="m10.615 3.793-.662-.663a3.86 3.86 0 0 0-5.458 0L3.13 4.495a3.86 3.86 0 0 0 0 5.458l.663.662m16.374 2.73.703.702a3.86 3.86 0 0 1 0 5.458l-1.365 1.365a3.86 3.86 0 0 1-5.458 0l-.703-.703m-4.093-6.823 1.364 1.365a.965.965 0 0 0 1.365 0l2.729-2.73a.965.965 0 0 0 0-1.364l-1.364-1.364a.965.965 0 0 0-1.365 0L9.25 11.98a.965.965 0 0 0 0 1.364Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M14.047 3.13a3.86 3.86 0 0 1 5.458 0l1.365 1.365a3.86 3.86 0 0 1 0 5.458L18.823 12 12 18.823 9.953 20.87a3.86 3.86 0 0 1-5.458 0L3.13 19.505a3.86 3.86 0 0 1 0-5.458L5.177 12 12 5.177l2.047-2.047Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBandage;
