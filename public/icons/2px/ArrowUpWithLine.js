import * as React from "react";

const SvgArrowUpwithLine = ({ title, titleId, ...props }) => (
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
      d="M12 21V7m0 0 5 5m-5-5-5 5m13-7H4"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowUpwithLine;
