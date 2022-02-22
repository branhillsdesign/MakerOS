import * as React from "react";

const SvgSnowboard = ({ title, titleId, ...props }) => (
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
      d="M3.14 8.3a3.65 3.65 0 0 1-.07-5.23 3.67 3.67 0 0 1 5.331.162c2.014 2.263 4.709 5.251 6.162 6.703 1.405 1.405 4.096 3.817 6.194 5.669 1.582 1.396 1.668 3.84.176 5.33a3.647 3.647 0 0 1-5.22-.07c-2.019-2.125-4.721-4.955-6.177-6.409C8.084 13.004 5.263 10.313 3.14 8.3Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8 8.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM14 14.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgSnowboard;
