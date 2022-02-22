import * as React from "react";

const SvgEyeMinus = ({ title, titleId, ...props }) => (
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
      d="M12 18c-4.548 0-8.367-2.526-9.916-6C3.633 8.526 7.452 6 12 6s8.367 2.526 9.916 6c-1.549 3.474-5.368 6-9.916 6Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M8 12h8" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgEyeMinus;
