import * as React from "react";

const SvgMagicStick = ({ title, titleId, ...props }) => (
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
      d="m11.041 9.322 6.85 11.865"
      stroke="#555770"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="m7.39 3 2.741 2.043 3.105-1.429-1.096 3.238 2.319 2.512-3.418-.042-1.673 2.98L8.352 9.04 5 8.37l2.79-1.974L7.39 3Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgMagicStick;
