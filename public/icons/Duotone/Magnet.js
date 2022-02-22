import * as React from "react";

const SvgMagnet = ({ title, titleId, ...props }) => (
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
    <path d="M6 4v1h1V4H6ZM18 4v1h-1V4h1Z" stroke="#555770" strokeWidth={2} />
    <path
      d="M12 20a6 6 0 0 0 6-6V8.5h-1v5.206C17 16.63 14.761 19 12 19s-5-2.37-5-5.294V8.5H6V14a6 6 0 0 0 6 6Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMagnet;
