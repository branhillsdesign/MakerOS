import * as React from "react";

const SvgJoiningArrows5 = ({ title, titleId, ...props }) => (
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
    <path d="m4.5 20 5.379-5.379" stroke="currentColor" strokeWidth={2} />
    <path d="M12 5v7.5l7.5 7.5" stroke="#555770" strokeWidth={2} />
    <path d="m16 6-4-4-4 4h8Z" fill="#555770" />
  </svg>
);

export default SvgJoiningArrows5;
