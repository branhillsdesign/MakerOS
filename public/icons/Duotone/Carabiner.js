import * as React from "react";

const SvgCarabiner = ({ title, titleId, ...props }) => (
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
      d="M6 16a6 6 0 0 0 12 0V8A6 6 0 0 0 6 8v1"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6 12h.9a.1.1 0 0 1 .1.1v2.8a.1.1 0 0 1-.1.1H6m0-3v3m0-3h-.9a.1.1 0 0 0-.1.1v2.8a.1.1 0 0 0 .1.1H6"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCarabiner;
