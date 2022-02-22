import * as React from "react";

const SvgBrokenArrowUp = ({ title, titleId, ...props }) => (
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
    <path d="M4 13V8h5l-5 5Z" fill="#555770" />
    <path d="m5 9 7 7 7-7" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgBrokenArrowUp;
