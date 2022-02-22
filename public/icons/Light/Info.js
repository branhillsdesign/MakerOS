import * as React from "react";

const SvgInfo = ({ title, titleId, ...props }) => (
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
      d="M8.5 10H11a1 1 0 0 1 1 1v5.5a1 1 0 0 0 1 1h2.5M12 7.5v-2M4 21h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgInfo;
