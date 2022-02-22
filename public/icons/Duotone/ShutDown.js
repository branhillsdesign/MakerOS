import * as React from "react";

const SvgShutDown = ({ title, titleId, ...props }) => (
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
      d="M6.6 4.8a9 9 0 1 0 10.8 0"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path d="M12 3v9" stroke="#555770" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export default SvgShutDown;
