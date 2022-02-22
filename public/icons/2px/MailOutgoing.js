import * as React from "react";

const SvgMailOutgoing = ({ title, titleId, ...props }) => (
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
      d="M22 11.5V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m2 6 10 6 10-6" stroke="#555770" strokeWidth={2} />
    <path
      d="m22 17 .707.707.707-.707-.707-.707L22 17Zm-8 1h8v-2h-8v2Zm8.707-1.707-3-3-1.414 1.414 3 3 1.414-1.414Zm-3 4.414 3-3-1.414-1.414-3 3 1.414 1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailOutgoing;
