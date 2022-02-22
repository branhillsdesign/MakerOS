import * as React from "react";

const SvgWrapTextUp = ({ title, titleId, ...props }) => (
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
    <path d="M15 4v6l-3-3 3-3Z" fill="#555770" />
    <path d="M20 18H4m.5-11H10" stroke="currentColor" strokeWidth={2} />
    <path
      d="M4 12.5h13.25a2.75 2.75 0 1 0 0-5.5H15"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWrapTextUp;
