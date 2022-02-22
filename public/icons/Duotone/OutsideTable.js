import * as React from "react";

const SvgOutsideTable = ({ title, titleId, ...props }) => (
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
    <path d="M12 22V8m0 0H5l7-5 7 5h-7Z" stroke="#555770" strokeWidth={2} />
    <path
      d="m3 12 1 5m0 0h4v5m-4-5v5m17-10-1 5m0 0h-4v5m4-5v5"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgOutsideTable;
