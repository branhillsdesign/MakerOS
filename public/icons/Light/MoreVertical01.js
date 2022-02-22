import * as React from "react";

const SvgMoreVertical01 = ({ title, titleId, ...props }) => (
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
      d="M12 5.9a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8Zm0 7.5a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8Zm0 7.5a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgMoreVertical01;
