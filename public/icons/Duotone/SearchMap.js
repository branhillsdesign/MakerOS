import * as React from "react";

const SvgSearchMap = ({ title, titleId, ...props }) => (
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
      d="M9 4 3.068 5.977A.1.1 0 0 0 3 6.072v14.79a.1.1 0 0 0 .132.094L9 19V4Zm0 0 6 2m0 0 5.868-1.956a.1.1 0 0 1 .132.095V11m-6-5v3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18.885 18.885 23 23m-2.933-6.967a4.033 4.033 0 1 1-8.067 0 4.033 4.033 0 0 1 8.067 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSearchMap;
