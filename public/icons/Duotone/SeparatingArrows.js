import * as React from "react";

const SvgSeparatingArrows = ({ title, titleId, ...props }) => (
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
    <path d="m4.5 5.5 5.379 5.379" stroke="currentColor" strokeWidth={2} />
    <path d="M12 20.5V13l7.5-7.5" stroke="#555770" strokeWidth={2} />
    <path d="M8.5 4H3v5.5L8.5 4Z" fill="currentColor" />
    <path d="M15.5 4H21v5.5L15.5 4Z" fill="#555770" />
  </svg>
);

export default SvgSeparatingArrows;
