import * as React from "react";

const SvgLink = ({ title, titleId, ...props }) => (
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
      d="m16.243 13.414 2.828-2.828a4 4 0 0 0-5.657-5.657l-2.828 2.828m2.828 8.486-2.828 2.828a4 4 0 1 1-5.657-5.657l2.828-2.828"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m15.536 8.464-7.071 7.072" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgLink;
