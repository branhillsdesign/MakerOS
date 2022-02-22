import * as React from "react";

const SvgUsb = ({ title, titleId, ...props }) => (
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
    <path d="M12 21V3" stroke="currentColor" strokeWidth={2} />
    <path
      d="M8.5 10v3.086a1 1 0 0 0 .293.707L12 17v-3.5l3.15-2.7a1 1 0 0 0 .35-.76V7"
      stroke="currentColor"
    />
    <path
      d="M14 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17 5h-3v3h3V5ZM14 4h-4l2-3 2 3Z"
      fill="#555770"
    />
  </svg>
);

export default SvgUsb;
