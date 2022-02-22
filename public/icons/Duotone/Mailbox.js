import * as React from "react";

const SvgMailbox = ({ title, titleId, ...props }) => (
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
      d="M7 7H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H10"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M7 12V3m0 0V1h6v2H7Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgMailbox;
