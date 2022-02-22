import * as React from "react";

const SvgKnife = ({ title, titleId, ...props }) => (
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
      d="m11.664 15.8-2.307-2.3-3.617 3.607c-.307.306-.833.83-1.484.733-.537-.08-1.153-.165-1.537.218l-.677.675c-.706.675-.496 1.47-.042 1.767 1.406.918 3.9 1.048 6.046-1.092 3.101-3.092 2.67-2.491 3.618-3.608Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M22 5.494a5.126 5.126 0 0 0-7.235 0l-6.719 6.7L9.358 13.5l2.306 2.3L22 5.495Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgKnife;
