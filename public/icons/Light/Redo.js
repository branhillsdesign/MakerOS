import * as React from "react";

const SvgRedo = ({ title, titleId, ...props }) => (
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
      d="M3 15c.896-4.008 4.425-7 8.642-7 3.078 0 5.788 1.593 7.377 4.011"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M21.4 14.4h-4.951L21.4 9.449V14.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgRedo;
