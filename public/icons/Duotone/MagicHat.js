import * as React from "react";

const SvgMagicHat = ({ title, titleId, ...props }) => (
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
      d="m16 3 .923 2M5 21h9v-4H5v4Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M1 21h4m13 0h-4m-9 0h9m-9 0V9.1a.1.1 0 0 1 .1-.1h8.8a.1.1 0 0 1 .1.1V21m8-5-4.448-9.637"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMagicHat;
