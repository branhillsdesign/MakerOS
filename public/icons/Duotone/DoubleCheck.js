import * as React from "react";

const SvgDoubleCheck = ({ title, titleId, ...props }) => (
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
    <path d="m6.878 11.5 5.366 5.5L22 7" stroke="#555770" strokeWidth={2} />
    <path
      d="M2 11.5 7.366 17l.692-.709M17.122 7l-5.574 5.713"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDoubleCheck;
