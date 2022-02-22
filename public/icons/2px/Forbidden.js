import * as React from "react";

const SvgForbidden = ({ title, titleId, ...props }) => (
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
      d="m11.293 12.707 6.325 6.325A8.958 8.958 0 0 1 12 21a9 9 0 0 1-9-9c0-2.125.736-4.078 1.968-5.618l6.325 6.325Zm-4.91-7.739A8.958 8.958 0 0 1 12 3a9 9 0 0 1 9 9 8.958 8.958 0 0 1-1.968 5.618l-6.325-6.325-6.325-6.325Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgForbidden;
