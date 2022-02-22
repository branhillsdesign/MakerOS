import * as React from "react";

const SvgEgg = ({ title, titleId, ...props }) => (
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
      d="M17.4 15a5.4 5.4 0 0 1-5.4 5.4v1.2a6.6 6.6 0 0 0 6.6-6.6h-1.2ZM12 20.4A5.4 5.4 0 0 1 6.6 15H5.4a6.6 6.6 0 0 0 6.6 6.6v-1.2ZM6.6 15c0-1.591.364-4.134 1.265-6.258C8.779 6.585 10.13 5.1 12 5.1V3.9c-2.631 0-4.28 2.108-5.24 4.373C5.786 10.571 5.4 13.278 5.4 15h1.2ZM12 5.1c1.869 0 3.22 1.485 4.135 3.642.9 2.124 1.265 4.667 1.265 6.258h1.2c0-1.722-.386-4.43-1.36-6.727C16.28 6.008 14.63 3.9 12 3.9v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgEgg;
