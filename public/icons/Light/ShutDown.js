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
      d="M12 3v9M6.6 4.8a9 9 0 1 0 10.8 0"
      stroke="#555770"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgShutDown;
