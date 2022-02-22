import * as React from "react";

const SvgUnlock = ({ title, titleId, ...props }) => (
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
    <path d="M8 12V9a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth={2} />
    <path
      d="M8 12h8.9a.1.1 0 0 1 .1.1V18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5.9a.1.1 0 0 1 .1-.1H8Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUnlock;
