import * as React from "react";

const SvgGrid03 = ({ title, titleId, ...props }) => (
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
      d="M22 3h-2.9a.1.1 0 0 0-.1.1v17.8a.1.1 0 0 0 .1.1H22M2 3h2.9a.1.1 0 0 1 .1.1v17.8a.1.1 0 0 1-.1.1H2M9 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgGrid03;
