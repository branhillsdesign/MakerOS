import * as React from "react";

const SvgRamboKnife = ({ title, titleId, ...props }) => (
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
      d="m3.182 18.224 7.093-6.894 2.86 2.776L6.04 21l-2.859-2.776Zm0 0L2 17.075"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8.996 10.084 16.09 3.19c1.632-1.587 4.279-1.587 5.91 0-1.181 1.149-2.364 2.298-1.772 4.022l-7.093 6.894-2.86-2.776-1.278-1.246Zm0 0-1.27-1.246"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRamboKnife;
