import * as React from "react";

const SvgFlashlight = ({ title, titleId, ...props }) => (
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
    <path d="M17 10H7v4l3 3v4h4v-4l3-3v-4Z" stroke="#555770" strokeWidth={2} />
    <path
      d="m4 5 2.5 2.5m5.5-6v4m8-.5-2.5 2.5"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFlashlight;
